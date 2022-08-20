
import { useAuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import SinglePost from "../Blog/SinglePost/SinglePost";

import './MyPosts.css';

const MyPosts = () => {
    const { user } = useAuthContext();
const { ownerPosts } = useContext(PostContext);

const ownerId = user._id;
const authorPosts = ownerPosts(ownerId);

return (
    <section id="author-view">
        <h1><span>My Posts</span></h1>
        {authorPosts.length > 0
            ? <div className="blog-posts"> {authorPosts.map(x => <SinglePost key={x._id} post={x} />)} </div>
            : <><h2 className="no-articles center">No articles yet!</h2><p className="center"><Link to={'/create'}>Create your first post</Link></p></>
        }
       
    </section>
)

}

export default MyPosts;