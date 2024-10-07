// import React from 'react';
// import './footer.css';
// import image from '../images/footer-logo.png';
// import { FaArrowUp, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const Footer = () => {
//     const cardData = [
//         {
//             header: 'Our Location',
//             p1: 'Sunny Isles Beach',
//             p2: 'Florida 33160',
//             p3: 'United States',
//         },
//         {
//             header: 'Customer Care',
//             p1: '010-020-0340',
//             p2: '090-080-0760',
//             p3: 'info@company.com',
//         },
//     ];

//     return (
//         <div className="footer">
//             {/* Footer Top Section */}
//             <div className="footer-top">
//                 <h1>Hire us to Work on a Project?</h1>
//                 <button className="discover-button">Contact Us Now</button>
//             </div>

//             {/* Footer Content Section */}
//             <div className="footer-left">
//                 <div className="footer-top-content">
//                     <div>
//                         <img src={image} alt="Company Logo" />
//                         <p>
//                             Designer is a free Bootstrap v5.1.3 CSS website template.
//                             <br /> Everyone can get the best HTML CSS templates from
//                             <br /> TemplateMo website.
//                         </p>
//                     </div>

//                     {/* Right Content */}
//                     <div className="about-company">
//                         {cardData.map((item, index) => (
//                             <div className="right-card" key={index}>
//                                 <h3>{item.header}</h3>
//                                 <p>{item.p1}</p>
//                                 <p>{item.p2}</p>
//                                 <p>{item.p3}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Footer Follow Us Section */}
//                 <div className="follow-us">
//                     <h3>Follow Us</h3>
//                     <div className="social-media-icons">
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                             <FaFacebook />
//                         </a>
//                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                             <FaTwitter />
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                             <FaInstagram />
//                         </a>
//                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                             <FaLinkedin />
//                         </a>
//                     </div>
//                 </div>

                {/* Footer Copy Right Section */}
//                 <div className="copy-right">
//                     <p>Copyright © 2024 Designer Co., Ltd. All Rights Reserved.</p>
//                     <div className="go-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//                         <FaArrowUp /> Go to top
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;
