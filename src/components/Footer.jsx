import logoWhite from "../assets/images/logo-white.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

const Cta = () => {
  const fullYear = new Date().getFullYear();

  return (
    <section id="footer" className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and socials links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">Copyright &copy; {fullYear}, All Rights Reserved</div>
          {/* Logo */}
          <div>
            <img src={logoWhite} className="h-8" alt="logo" />
          </div>
          {/* Social links container */}
          <div className="flex justify-center space-x-4">
            <a href="/#">
              <img src={facebookIcon} alt="facebookIcon" />
            </a>
            <a href="/#">
              <img src={youtubeIcon} alt="youtubeIcon" />
            </a>
            <a href="/#">
              <img src={twitterIcon} alt="twitterIcon" />
            </a>
            <a href="/#">
              <img src={pinterestIcon} alt="pinterestIcon" />
            </a>
            <a href="/#">
              <img src={instagramIcon} alt="instagramIcon" />
            </a>
          </div>
        </div>
        {/* Menu Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="/#" className="hover:text-brightRed">
              Home
            </a>
            <a href="/#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="/#" className="hover:text-brightRed">
              Products
            </a>
            <a href="/#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="/#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="/#" className="hover:text-brightRed">
              Community
            </a>
            <a href="/#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* Subscribe Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox" />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
            </div>
          </form>
          <div className="hidden text-white md:block">Copyright &copy; {fullYear}, All Rights Reserved</div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
