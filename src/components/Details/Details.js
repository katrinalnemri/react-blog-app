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

            fetchPostDetails(postId, { ...postDetails, comments: postComments});

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

            document.querySelector('.create-comment textarea').value = ''
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
                <Link to={`/blog/${postId}/author`} className="author-button">
                            See all posts from this Author
                        </Link>
                        <div>
    
      </div>
                        </div>
                </div>
                </div>
              
            </div>
            <div className='comments'>
            <div className="post-comments">
                
                    {currentPost.comments && currentPost.comments.length > 0 ? <h1>Comments:</h1> 
                    : <h1>No comments!</h1>}
                    <ul>
                        {currentPost.comments?.map(x =>
                            <li key={x._id ? x._id : x} className="comment">
                                <div className='comment-holder'>
                                    {x.user ? 
                                    <><h3 className='comment-author'>
                                            {x.user.email} says:
                                        </h3><p>{x.text}</p></>
                                    : 
                                    <p>{x}</p>
}
                                </div>
                            </li>
                        )}
                    </ul>

                </div>
              {user.email ? 
            <div className="create-comment">
                <h2>Add new comment:</h2>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea
                    cols='5'
                    rows='7'
                        name="comment"
                        placeholder="Comment......"
                    />
<br/>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </div>
               : 
<div className='button'>
    <span>
    <Link to='/login'>Login</Link> to post comments!
    </span>
    </div> }
              
            </div>
        </section>
    );
};

export default PostDetails;
