import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dvmczcg3f/image/upload/v1734146844/Codedex%2090s%20Themed%20Hackathon%20-%20Ask%20The%20Mask%20Assets/home-bttn_ueyp0g.gif"
            alt="home-bttn-gif"
            style={{ width: "150px", height: "100%" }}
          />
        </Link>
        {/* remember to link to page that explains the project's meaning */}
        <Link to="/info">
          <img
            src="https://res.cloudinary.com/dvmczcg3f/image/upload/v1734148287/Codedex%2090s%20Themed%20Hackathon%20-%20Ask%20The%20Mask%20Assets/info-gif_t7q9ga.gif"
            alt="info-gif"
            style={{ width: "150px", height: "100%" }}
          />
        </Link>
        {/* Remember to link to email/contact info */}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dvmczcg3f/image/upload/v1734147688/Codedex%2090s%20Themed%20Hackathon%20-%20Ask%20The%20Mask%20Assets/email3-gif_ej7qfp.gif"
            alt="email"
            style={{ width: "350px", height: "100%" }}
          />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
