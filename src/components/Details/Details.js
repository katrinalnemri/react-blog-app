import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { useAuthContext } from '../../contexts/AuthContext';
import './Details.css';

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
            const postComments = await commentService.getByPostId(postId);

            fetchPostDetails(postId, { ...postDetails, comments: postComments.map(x => `${x.user.email}: ${x.text}`)});

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
            <div className="post-section">
                <div className='post-inner'>
                <div className="post-img-holder">
                    <img className="post-img" src={currentPost.imageUrl} />
                    </div>
                    <div className='post-details'>
                    <h2>{currentPost.designer}</h2>
                    <p className="brand">Brand: {currentPost.brand}</p>
                    <p className="model">Model: {currentPost.model}</p>
                    <p className="model">Year: {currentPost.release}</p>
                    <div className='post-footer'>
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
                        <div>
    
      </div>
                        </div>
                </div>
                </div>
              
            </div>
            <div className="post-comments">
                    {currentPost.comments && currentPost.comments.length > 0 ? <h2>Comments:</h2> : "No comments!"}
                    <ul>
                        {currentPost.comments?.map(x =>
                            <li key={x} className="comment">
                                <p>{x}</p>
                            </li>
                        )}
                    </ul>

                </div>
            <div className="create-comment">
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
            </div>
        </section>
    );
};

export default PostDetails;
