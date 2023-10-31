import { Provider, useDispatch } from "react-redux";
import Browse from "./Browse";
import Login from "./Login";
import appStore from "../utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/FireBase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        {console.log("user sign in",user);}
        const { uid, email, displayName }  = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <Provider store={appStore}>
        <Login />
        <Browse />
      </Provider>
    </div>
  );
};

export default Body;
