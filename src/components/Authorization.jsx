import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
function Authorization({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <form className="auth" onSubmit={handleSubmit}>
      <h1>Авторизация</h1>
      <div className="inputs">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
      </div>
      <div className="btns">
        <button type="submit" className="sign">
          Войти
        </button>
        <Link className="link" to="/register">
          Зарегистрироваться
        </Link>
      </div>
    </form>
  );
}
export default Authorization;
