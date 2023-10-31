import { useRef, useState } from "react";
import Header from "./Header";
import "./Login.scss";
import { checkValidateData } from "../utils/router/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import { auth } from "../utils/fireBase";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [name, setName] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate the form data

    // console.log("inside handle button click");
    // console.log(isSignInForm);

    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log("name value", name.current.value);
    // let message: any;

    // if(isSignInForm === false) {
    //   const name="";
    //   message = checkValidateData(email.current.value, password.current.value, name);
    //   console.log(message);
    //   setErrorMessage(message);
    // }else {
    //   message = checkValidateData(email.current.value, password.current.value, name.current.value);
    //   console.log(message);
    //   setErrorMessage(message);
    // }

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    //Sign in/ Sign up logic

    if (!isSignInForm) {
      //Sign up logic
      console.log("inside sign up form");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName }  = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div className="login">
        <Header />
        <img
          className="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background image"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="login-form"
      >
        <h1>{isSignInForm ? "Sign in" : "Sign up"}</h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="full name"
            className="inputs"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email/phone"
          className="inputs"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="inputs"
        />
        <p>{errorMessage}</p>
        <button
          type="submit"
          className="submit-button"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="sign-in-message" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already exist!! Sign in now"}{" "}
        </p>
      </form>
    </>
  );
};

export default Login;
