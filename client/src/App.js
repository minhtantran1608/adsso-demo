import { LoginSuccess } from "./app/pages/login/LoginSuccess";
import Info from "./app/pages/info/Info";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { addToCart } from "./app/redux/reducers";
import { logIn } from "./app/redux/reducers";
import "./App.css";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleAddToCart = (item) => {
  //   dispatch(addToCart(item));
  //   console.log(cart);
  // };

  const fetchAuthUser = async () => {
    const response = await axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .catch((err) => {
        console.log("Not properly authenticated");
        // dispatch(setIsAuthenticated(false));
        // dispatch(setAuthUser(null));
        navigate("/login/error");
      });

    if (response && response.data) {
      console.log("User: ", response.data);
      dispatch(logIn(response.data));
      // dispatch(setIsAuthenticated(true));
      // dispatch(setAuthUser(response.data));
      console.log(user);
      navigate("/welcome");
    }
  };

  const redirectToGoogleSSO = async () => {
    const googleLoginURL = "http://localhost:3000/auth/azure/login";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      const timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          fetchAuthUser();
          // navigate("/login/success");
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              Welcome Home!
              <Link to="/login">Login</Link>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <div>
              <button
                className="microsoft-button"
                onClick={redirectToGoogleSSO}
              >
                Sign In With Microsoft
              </button>
              {/* <button
                onClick={() => handleAddToCart({ name: "test", price: 20000 })}
              >
                Add to cart
              </button> */}
            </div>
          }
        >
          {/* <GoogleButton onClick={redirectToGoogleSSO} /> */}
        </Route>
        <Route
          path="/welcome"
          // element={<div>Welcome Back {user && user?.displayName}</div>}
          element={<Info user={user} />}
        ></Route>
        <Route exact path="/login/success" element={<LoginSuccess />} />
        <Route
          path="/login/error"
          element={<div>Error loging in. Please try again later!</div>}
        >
          {/* Error loging in. Please try again later! */}
        </Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
