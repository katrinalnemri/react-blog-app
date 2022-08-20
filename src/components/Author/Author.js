import { useContext} from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import SinglePost from "../Blog/SinglePost/SinglePost";

import './Author.css';

const Author = () => {

    const { selectPost, ownerPosts } = useContext(PostContext);
    const { postId } = useParams();

    const currentPost = selectPost(postId);

    const ownerId = currentPost._ownerId;
    const authorPosts = ownerPosts(ownerId);
            
    return (
        <section id="author-view">
        <h1><span>Latest posts</span></h1>
<div className="blog-posts">

            {authorPosts.length > 0
                ? authorPosts.map(x => <SinglePost key={x._id} post={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
            </div>
        </section>
    )

}

export default Author;