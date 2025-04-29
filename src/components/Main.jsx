import { useState } from "react";
import useHouses from "../hooks/useHouses";
import Loading from "./Loading";
import Card from "./Card";
function Main() {
  const { data } = useHouses();
  const [city, setCity] = useState();
  console.log(data);

  return (
    <div>
      {!data ? (
        <Loading />
      ) : (
        <div className="page">
          <div className="info">
            <h1>
              Мы — сервис, который помогает студентам легко и быстро найти
              комфортное жильё рядом с учебными заведениями. Удобный поиск,
              проверенные объявления и поддержка на каждом этапе — всё, чтобы
              ваш переезд был простым и безопасным. Начните искать жильё уже
              сегодня!
            </h1>
            <img
              src="https://img.freepik.com/free-photo/happy-woman-pointing-up-with-her-finger_1098-1241.jpg?t=st=1743270352~exp=1743273952~hmac=bf909e9bf61d14f093aa98edfe2e12c35e0344843b7c0a475e518d67d652e629&w=740"
              alt=""
            />
          </div>
          <div className="mainWork">
            <form>
              <div className="filter">
                <h1>Выберите город</h1>
                <h2>
                  Предоставим жилища, по дешёвой цене рядом с высшим учебным
                  заведением, в котором вы обучаетесь
                </h2>
                <select name="city" onChange={(e) => setCity(e.target.value)}>
                  <option value="null">- - - - -</option>
                  <option value="astana">Астана</option>
                  <option value="almaty">Алматы</option>
                </select>
                <button className="filterBtn" type="submit">
                  Показать
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default Main;
