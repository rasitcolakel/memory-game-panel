import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Toast from "./UI/Toast";
import Home from "./routes/Home";
import { ProtectedRoute } from "./UI/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./store/actions/auth";
import { UnprotectedRoute } from "./UI/UnprotectedRoute";
import Collections from "./routes/Collections";
import ResponsiveAppBar from "./UI/ResponsiveAppBar";
import Images from "./routes/Images";
import Logout from "./routes/Logout";
import Users from "./routes/Users";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<ProtectedRoute children={<Home />} />} />
          <Route
            path="/collections"
            element={<ProtectedRoute children={<Collections />} />}
          />
          <Route
            path="/images"
            element={<ProtectedRoute children={<Images />} />}
          />
          <Route
            path="/users"
            element={<ProtectedRoute children={<Users />} />}
          />
          <Route
            path="/logout"
            element={<ProtectedRoute children={<Logout />} />}
          />
          <Route
            path="/login"
            element={<UnprotectedRoute children={<Login />} />}
          />
        </Routes>
      </BrowserRouter>
      <Toast />
    </div>
  );
}

export default App;
