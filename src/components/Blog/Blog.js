import { useContext } from "react";

import { PostContext } from "../../contexts/PostContext";
import SinglePost from "./SinglePost/SinglePost";

const Blog = () => {
    const { posts } = useContext(PostContext);
    console.log(posts)
    return (
        <section id="blog-page">
            <h1>All Posts</h1>

            {posts.length > 0
                ? posts.map(x => <SinglePost key={x._id} post={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
};

export default Blog;
