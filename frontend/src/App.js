import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MovieScreen from "./Screens/MovieScreen";
import HomeScreen from "./Screens/HomeScreen";
import SigninScreen from "./Screens/SigninScreen";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./Actions/userActions";
import BookingScreen from "./Screens/BookingScreen";
import RegisterScreen from "./Screens/RegisterScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              book<span className="red">my</span>show
            </Link>
          </div>
          <div>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name.split(" ")[0]}{" "}
                  <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/" component={HomeScreen} exact={true} />
            <Route path="/movie/:id" component={MovieScreen} exact={true} />
            <Route path="/signin" component={SigninScreen} exact={true} />
            <Route path="/booking/:id" component={BookingScreen} exact={true} />
            <Route path="/register" component={RegisterScreen} exact={true} />
          </Switch>
        </main>
        <footer className="row center">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
