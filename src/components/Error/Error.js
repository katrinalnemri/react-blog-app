import { Link } from "react-router-dom";
import './Error.css';

const Error = () =>{
    return (
<div className="error-page">
    <h1>Oops!</h1>
    <p>Sorry, the page you are looking for doesn't exist!</p>
    <div className="buttons">
        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>Blog</Link>
    </div>
</div>
    )
}

export default Error;