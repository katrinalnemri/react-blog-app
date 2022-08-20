import { useContext } from "react";

import { PostContext } from "../../contexts/PostContext";
import SinglePost from "./SinglePost/SinglePost";

import './Blog.css';

const Blog = () => {
    const { posts } = useContext(PostContext);
    console.log(posts)
    return (
        <section id="blog-view">
            <h1><span>Latest Posts</span></h1>

            {posts.length > 0
                ? <div className="blog-posts"> {posts.map(x => 
                <SinglePost key={x._id} post={x} />
            
                )} </div>
                : <h2 className="no-articles center">No articles yet</h2>
            }
        </section>
    );
};

export default Blog;
