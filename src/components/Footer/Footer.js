import { Link } from "react-router-dom";
const creditsyear = `All rights reserved! ${new Date().getFullYear()}`;
const Footer = () => {
return(
    <footer>
        {/* DO NOT REMOVE THE CREDITS */}
<div className='copyright'>
<div className='copy name'> {creditsyear} &#169;. </div>
<div className='copy creator'>Designed and developed by <Link to={'https://github.com/katrinalnemri'} target='_blank'>Katrin</Link>.</div>
</div>
 {/* DO NOT REMOVE THE CREDITS */}
    </footer>
)
}

export default Footer;