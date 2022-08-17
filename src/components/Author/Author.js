import { useContext} from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import SinglePost from "../Blog/SinglePost/SinglePost";

const Author = () => {

    const { selectPost, ownerPosts } = useContext(PostContext);
    const { postId } = useParams();

    const currentPost = selectPost(postId);

    console.log(currentPost)
    const ownerId = currentPost._ownerId;

    console.log(ownerId)

    const authorPosts = ownerPosts(ownerId);
            

    console.log(authorPosts)
    return (
        <section id="blog-page">
            <h1>All Posts</h1>

            {authorPosts.length > 0
                ? authorPosts.map(x => <SinglePost key={x._id} post={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    )

}

export default Author;