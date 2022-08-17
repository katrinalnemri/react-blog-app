
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
    return (
        <div className="allPosts">
            <div className="allPosts-info">
                <img src={post.imageUrl} />
                <h6>{post.category}</h6>
                <h2>{post.title}</h2>

                <Link to={`/blog/${post._id}`} className="details-button">
                    Details
                </Link>
            </div>

        </div>
    );
};

export default SinglePost;
