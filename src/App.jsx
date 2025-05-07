import "./App.css";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Authorization from "./components/Authorization";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="main">
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route element={<Main user={user} />} path="/" />
          <Route
            element={<Registration setUser={setUser} />}
            path="/register"
          />
          <Route element={<Authorization setUser={setUser} />} path="/auth" />
          <Route element={<Profile user={user} />} path="/profile" />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
