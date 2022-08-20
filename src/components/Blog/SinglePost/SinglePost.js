
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
    return (
        <article className="post">
            <div className="post-inner">
                <img className='post-img' src={post.imageUrl} />
                <h3 className='post-title'>Designer: {post.designer}</h3>
                <p className='post-category'>Category: {post.brand}</p>
                <Link to={`/blog/${post._id}`} className="read-more">
                    Read more
                </Link>
            </div>

        </article>
    );
};

export default SinglePost;
