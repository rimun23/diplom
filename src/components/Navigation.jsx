import { Link } from "react-router";
import { auth } from "../firebaseConfig";
function Navigation({ user, setUser }) {
  return (
    <nav>
      <ul>
        <li className="link">
          <Link to="/">Главная</Link>
        </li>
        <li className="link">
          {!user ? (
            <Link to="/auth">Профиль</Link>
          ) : (
            <Link to="/profile">Профиль</Link>
          )}
        </li>

        {!user ? (
          <li>
            {" "}
            <Link to="/auth" className="link">
              Войти
            </Link>{" "}
            <span style={{ font: "20px" }}>/</span>{" "}
            <Link to="/register" className="link">
              Зарегистрироваться
            </Link>{" "}
          </li>
        ) : (
          <li className="link">
            <Link
              to="/"
              onClick={() => auth.signOut().then(() => setUser(null))}
            >
              Выйти
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navigation;
