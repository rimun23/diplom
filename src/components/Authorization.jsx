import { Link, useNavigate } from "react-router";
import { useRef, useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
function Authorization({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const img = useRef();
  const sides = useRef();
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
    <div ref={sides}>
      <div className="firstSide">
        <img
          src="https://riverside.kz/images/post/5838402497f6b.jpg"
          alt=""
          style={{ transform: "translateX(40px)" }}
          className="houseImage"
          ref={img}
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/615406141.jpg?k=78828633ab3031a3593b1455fa35f942918e3c32ddea75bdfe835999d3339e57&o=&hp=1"
          alt=""
          style={{ transform: "translateX(-60px)" }}
          className="houseImage"
          ref={img}
        />
        <img
          src="https://a0.muscache.com/im/pictures/cee48827-c97c-40b6-84df-4cabf4a842d1.jpg"
          alt=""
          className="houseImage"
          ref={img}
        />
      </div>
      <div className="secondSide">
        <img
          src="https://a0.muscache.com/im/pictures/fa516897-233d-4da6-9e3f-5149fbc04925.jpg"
          alt=""
          style={{ transform: "translateX(-60px)" }}
          className="houseImage"
          ref={img}
        />
        <img
          src="https://cdn.esoft.digital/320240/cluster/eco_newhouses_photos/f5/9a26178c5259c127e5cfd07b7e65c0a8a0b388f5.jpeg"
          alt=""
          className="houseImage"
          ref={img}
        />
        <img
          src="https://www.shutterstock.com/shutterstock/photos/1182506545/display_1500/stock-photo-housing-apartment-building-almaty-kazakhstan-june-1182506545.jpg"
          alt=""
          style={{ transform: "translateX(40px)" }}
          className="houseImage"
          ref={img}
        />
      </div>
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
    </div>
  );
}
export default Authorization;
