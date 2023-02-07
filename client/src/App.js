import { LoginSuccess } from "./app/pages/login/LoginSuccess";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // useHistory,
} from "react-router-dom";
import GoogleButton from "react-google-button";
import { addToCart } from "./app/redux/reducers";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(cart);
  };

  // const fetchAuthUser = async () => {
  //   const response = await axios
  //     .get("http://localhost:5000/api/v1/auth/user", { withCredentials: true })
  //     .catch((err) => {
  //       console.log("Not properly authenticated");
  //       dispatch(setIsAuthenticated(false));
  //       dispatch(setAuthUser(null));
  //       history.push("/login/error");
  //     });

  //   if (response && response.data) {
  //     console.log("User: ", response.data);
  //     dispatch(setIsAuthenticated(true));
  //     dispatch(setAuthUser(response.data));
  //     history.push("/welcome");
  //   }
  // };

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
          // fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };
  return (
    <div className="App">
      <Router>
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
                <GoogleButton onClick={redirectToGoogleSSO} />
                <button
                  onClick={() =>
                    handleAddToCart({ name: "test", price: 20000 })
                  }
                >
                  Add to cart
                </button>
              </div>
            }
          >
            {/* <GoogleButton onClick={redirectToGoogleSSO} /> */}
          </Route>
          {/* <Route path="/welcome">Welcome Back {user && user.fullName}</Route> */}
          <Route exact path="/login/success" element={<LoginSuccess />} />
          <Route
            path="/login/error"
            element={<div>Error loging in. Please try again later!</div>}
          >
            {/* Error loging in. Please try again later! */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
