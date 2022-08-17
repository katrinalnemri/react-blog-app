import { useContext } from 'react';

import { PostContext } from '../../contexts/PostContext';
import * as postService from '../../services/postService';

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
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter post title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter post category..."
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />

                    <label htmlFor="post-img">Image:</label>

                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />

                    <label htmlFor="summary">Summary:</label>

                    <textarea name="summary" id="summary" defaultValue={""} />

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
