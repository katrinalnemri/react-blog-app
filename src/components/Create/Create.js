import { useContext } from 'react';

import { PostContext } from '../../contexts/PostContext';
import * as postService from '../../services/postService';

import './Create.css';

const CreatePost = () => {
    const { postAdd } = useContext(PostContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));

        postService.create(postData)
            .then(result => {
                postAdd(result)
            });
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Post</h1>
                    <label htmlFor="designer">Designer:</label>
                    <input
                        type="text"
                        id="designer"
                        name="designer"
                        placeholder="Designer..."
                    />
                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        placeholder="Enter brand here..."
                    />
                    <label htmlFor="year">Release year:</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        placeholder="Enter release year here..."
                    />

                    <label htmlFor="post-img">Image:</label>

                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />

<label htmlFor="model">Model:</label>

<input
    type="text"
    id="model"
    name="model"
    placeholder="Enter model here..."
/>
<br/>

                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Post"
                    />
                </div>
            </form>
        </section>
    );
};

export default CreatePost;
