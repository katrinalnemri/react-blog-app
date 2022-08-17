
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
    return (
        <article className="post">
            <div className="post-inner">
                <img src={post.imageUrl} />
                <h3>Designer: {post.designer}</h3>
                <p>Category: {post.brand}</p>
                <Link to={`/blog/${post._id}`} className="read-more">
                    Read more
                </Link>
            </div>

        </article>
    );
};

export default SinglePost;
