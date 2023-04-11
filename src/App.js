import { Routes, Route } from "react-router-dom";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { UserRoute } from "./routeGuards/UserRoute";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";

import { AuthContext } from "./contexts/AuthContext";

function App() {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const authLogin = (authData) => {
    setAuth(authData);
  };

  const authLogout = () => {
    setAuth({});
  };
  
  return (
    <AuthContext.Provider
      value={{
        auth,
        authLogin,
        authLogout,
        isAuthenticated: Boolean(auth.accessToken),
        isOwner: "",
      }}
    >
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route element={<UserRoute />}>
              <Route path="/logout" element={<Logout />} />
            </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
    </AuthContext.Provider>
  );
}

export default App;
