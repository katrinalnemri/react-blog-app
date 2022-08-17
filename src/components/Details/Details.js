import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { useAuthContext } from '../../contexts/AuthContext';

import * as postService from '../../services/postService';
import * as commentService from '../../services/commentService';

const PostDetails = () => {
    const navigate = useNavigate();
    const { addComment, fetchPostDetails, selectPost, postRemove} = useContext(PostContext);
    const { user } = useAuthContext();
    const { postId } = useParams();

    const currentPost = selectPost(postId);

    const isOwner = currentPost._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const postDetails = await postService.getOne(postId);
            console.log(postDetails);
            const postComments = await commentService.getByPostId(postId);

            fetchPostDetails(postId, { ...postDetails, comments: postComments.map(x => `${x.user.email}: ${x.text}`) });

        })();
    }, [])

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const comment = formData.get('comment');

        commentService.create(postId, comment)
            .then(result => {
                addComment(postId, comment);
            });
    };

    const postDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            postService.remove(postId)
                .then(() => {
                    postRemove(postId);
                    navigate('/blog');
                })
        }
    }

    return (
        <section id="post-details">
            <h1>Post Details</h1>
            <div className="info-section">
                <div className="post-header">
                    <img className="post-img" src={currentPost.imageUrl} />
                    <h1>{currentPost.title}</h1>
                    <span className="levels">MaxLevel: {currentPost.maxLevel}</span>
                    <p className="type">{currentPost.category}</p>
                </div>
                <p className="text">
                    {currentPost.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {currentPost.comments?.map(x =>
                            <li key={x} className="comment">
                                <p>{x}</p>
                            </li>
                        )}
                    </ul>

                    {!currentPost.comments &&
                        <p className="no-comment">No comments.</p>
                    }
                </div>
                {isOwner &&
                    <div className="buttons">
                        <Link to={`/blog/${postId}/edit`} className="button">
                            Edit
                        </Link>
                        
                        <button onClick={postDeleteHandler} className="button">
                            Delete
                        </button>
                    </div>
                }
                <Link to={`/blog/${postId}/author`} className="button">
                            Author
                        </Link>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
};

export default PostDetails;
