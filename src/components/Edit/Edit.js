import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as postService from '../../services/postService';
import { PostContext } from "../../contexts/PostContext";

const EditPost = () => {
    const [currentPost, setCurrentPost] = useState({});
    const { postEdit } = useContext(PostContext);
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOne(postId)
            .then(postData => {
                setCurrentPost(postData);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));

        postService.edit(postId, postData)
            .then(result => {
                postEdit(postId, result);
                navigate(`/blog/${postId}`)
            });
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Post</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentPost.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={currentPost.category} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        defaultValue={currentPost.maxLevel}
                    />
                    <label htmlFor="post-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentPost.imageUrl} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={currentPost.summary} />
                    <input className="btn submit" type="submit" defaultValue="Edit Post" />
                </div>
            </form>
        </section>
    );
}

export default EditPost;
