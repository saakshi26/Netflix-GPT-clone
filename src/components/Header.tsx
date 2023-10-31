import { signOut } from "firebase/auth";
import "./Header.scss";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user);

  const handleSignOut = () => {
    console.log("inside handle sign out");
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
    }).catch((error) => {
      // An error happened.
      //if we have error page we can navigate to that error page displaying this error msg
    });
  }

  return (
    <>
    <div className="header">
    <img className="logo" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix logo"/>
    
    {user && <div className="header-right">
    <img className="user-icon" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" />
    <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
    </div>}
    </div>
    </>
    
  );
}

export default Header