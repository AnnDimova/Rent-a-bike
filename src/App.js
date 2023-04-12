import { Routes, Route } from "react-router-dom";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { UserRoute } from "./routeGuards/UserRoute";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Error } from "./components/Error/Error";
import { Details } from "./components/Details/Details";
import { Create } from "./components/Create/Create";

import { Edit } from "./components/Edit/Edit";

import { AuthContext } from "./contexts/AuthContext";
import { MyProfile } from "./components/MyProfile/MyProfile";

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
              <Route path="/create" element={<Create />} />
              <Route path="/details/:bikeId/edit" element={<Edit />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:bikeId" element={<Details />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </>
    </AuthContext.Provider>
  );
}

export default App;
