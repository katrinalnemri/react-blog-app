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
<div className="blog-posts">
            {posts.length > 0
                ? posts.map(x => 
                <SinglePost key={x._id} post={x} />
            
                )
                : <h3 className="no-articles">No articles yet</h3>
            }
            </div>
        </section>
    );
};

export default Blog;
