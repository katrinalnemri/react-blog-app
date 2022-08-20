import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as postService from '../../services/postService';
import { PostContext } from "../../contexts/PostContext";

import './Edit.css';

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
                    <label htmlFor="designer">Designer:</label>
                    <input
                        type="text"
                        id="designer"
                        name="designer"
                        defaultValue={currentPost.designer}
                    />
                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        defaultValue={currentPost.brand}
                    />
                    <label htmlFor="year">Release year:</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        defaultValue={currentPost.release}
                    />

                    <label htmlFor="post-img">Image:</label>

                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={currentPost.imageUrl}
                    />

<label htmlFor="model">Model:</label>

<input
    type="text"
    id="model"
    name="model"
    defaultValue={currentPost.model}
/>
<br/>

                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue={"Submit changes"}
                    />
                </div>
            </form>
        </section>
    );
}

export default EditPost;
