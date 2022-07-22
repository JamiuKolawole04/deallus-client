import { Link } from "react-router-dom";

import footertLogo from "../../asset/img/logo-footer.png";
import instagramLogo from "../../asset/img/instagram.png";
import twitterLogo from "../../asset/img/twitter.png";
import googleLogo from "../../asset/img/google.png";
import fbLogo from "../../asset/img/facebook.png";

const Footer = ({ content }) => {
    return (
        <>
            <footer className="ash-bg">
                <div className="ft__overlay">
                    {content &&
                        <div className="">
                            <div className="ft__content">
                                <img src={footertLogo} alt="" />
                                <div className="d-flex row justify-content-between align-items-center">
                                    <ul>
                                        <li className="about">about</li>
                                        <div className="mt-28">
                                            <Link to="#"> <li>Deallus</li> </Link>
                                            <Link to="#"> <li>Team</li> </Link>
                                            <Link to="#"> <li>Mission</li> </Link>
                                        </div>

                                    </ul>

                                    <ul>
                                        <li>churches</li>
                                        <div className="mt-28">
                                            <Link to="#"> <li>Course Title Stays Here</li> </Link>
                                            <Link to="#"> <li>Course Title Stays</li> </Link>
                                            <Link to="#"> <li>Course Title Here</li> </Link>
                                            <Link to="#"> <li>Course Title Ok</li> </Link>
                                        </div>

                                    </ul>

                                    <ul>
                                        <li>blog</li>
                                        <div className="mt-28">
                                            <Link to="#"> <li>Catalog</li> </Link>
                                            <Link to="#"> <li>Tools</li> </Link>
                                            <Link to="#"> <li>Mentors</li> </Link>
                                            <Link to="#"> <li>Guardians</li> </Link>
                                        </div>

                                    </ul>

                                    <ul>
                                        <li>developers</li>
                                        <div className="mt-28">
                                            <Link to="#"> <li>API</li> </Link>
                                            <Link to="#"> <li>Documentation</li> </Link>
                                            <Link to="#"> <li>Churches</li> </Link>
                                            <Link to="#"> <li>Jobs</li> </Link>
                                        </div>

                                    </ul>

                                    <ul>
                                        <li>support</li>
                                        <div className="mt-28">
                                            <Link to="#"> <li>Contact Us</li> </Link>
                                            <Link to="#"> <li>Help and FAQS</li> </Link>
                                            <Link to="#"> <li>Mentors</li> </Link>
                                            <Link to="#"> <li>Community</li> </Link>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                            <div className="copyright">
                                <div className="d-flex row justify-content-between">
                                    <p>Copyright {new Date().getFullYear()}, Deallus Church. Allrights reserved.</p>
                                    <div className="mr-280">
                                        <p>Legal & Privacy </p>.
                                        <p>Term of use </p>.
                                        <p>Site map </p>
                                    </div>
                                    <div className="media__link">
                                        <ul>
                                            <Link to="#"> <img src={instagramLogo} alt="" /> </Link>
                                            <Link to="#"> <img src={twitterLogo} alt="" /> </Link>
                                            <Link to="#"> <img src={googleLogo} alt="" /> </Link>
                                            <Link to="#"> <img src={fbLogo} alt="" /> </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    }
                </div>
            </footer>

        </>
    );
}

export default Footer