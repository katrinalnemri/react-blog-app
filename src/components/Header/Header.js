import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    PostsPlay
                </Link>
            </h1>
            <nav>
                {user.email && <span>{user.email}</span>}
                <Link to="/blog">Blog</Link>
                {user.email
                    ? <div id="user">
                        <Link to="/my-posts">My Posts</Link>
                        <Link to="/create">Create Post</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Header;
