import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/Authentication";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoutes>
                <Signup />
              </PublicRoutes>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
