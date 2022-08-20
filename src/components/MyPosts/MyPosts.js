
import { useAuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import SinglePost from "../Blog/SinglePost/SinglePost";

const MyPosts = () => {
    const { user } = useAuthContext();
console.log(user)
const { selectPost, ownerPosts } = useContext(PostContext);
const { postId } = useParams();

const currentPost = selectPost(postId);

console.log(currentPost)
const ownerId = user._id;

console.log(ownerId)

const authorPosts = ownerPosts(ownerId);
        

console.log(authorPosts)
return (
    <section id="blog-view">
        <h1><span>My Posts</span></h1>
<div className="blog-posts">
        {authorPosts.length > 0
            ? authorPosts.map(x => <SinglePost key={x._id} post={x} />)
            : <h3 className="no-articles">No articles yet</h3>
        }
        </div>
    </section>
)

}

export default MyPosts;