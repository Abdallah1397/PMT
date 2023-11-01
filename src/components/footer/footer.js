import { Link } from "react-router-dom";
import { footerSections } from "./sections";
import "./footer.css";
const Footer = () => {
  console.log(footerSections);
  return (
    <footer className="footer">
      {/* Sections */}
      <div className="row">
        <div className="col-12 col-lg-4 mb-4">
          <img
            src={require("../../assets/images/pmtTransparentLogo.png")}
            alt="PMT Logo"
            className="footerLogo"
          />
          <p className="sectionColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing ,<br /> sed do
            eiusmod tempor incididunt ut
            <br /> labore et dolore magna aliqua.
          </p>
          {/* Social Media Icons */}
          <div className="footerSocialMedia">
            <Link to="https://www.facrbook.com/">
              <img
                src={require("../../assets/images/facebookIcon.png")}
                alt="facebookIcon"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                src={require("../../assets/images/instagramIcons.png")}
                alt="instagramIcons"
              />
            </Link>
            <Link to="https://www.linkedin.com/">
              <img
                src={require("../../assets/images/linkedinIcon.png")}
                alt="linkedinIcon"
              />
            </Link>
            <Link to="https://www.pinterest.com/">
              <img
                src={require("../../assets/images/pinterestIcon.png")}
                alt="pinterestIcon"
              />
            </Link>
          </div>
        </div>
        {footerSections.map((item, i) => (
          <div className="col-6 col-lg-2 mb-5" key={i}>
            <h4 className="sectionName">{item.sectionName}</h4>
            {item.sectionContent.map((element, index) => (
              <p className="sectionColor" key={index}>
                {element}
              </p>
            ))}
          </div>
        ))}
      </div>
      {/* Copy Rights */}
      <div className="copyRights">
        <div md={6}>
          © 2019 - {new Date().getFullYear()} | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
