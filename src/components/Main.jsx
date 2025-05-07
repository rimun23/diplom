import { useState, useLayoutEffect, useEffect } from "react";
import useHouses from "../hooks/useHouses";
import Loading from "./Loading";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText";
function Main({ user }) {
  const { data } = useHouses();
  const [city, setCity] = useState();
  const [filteredHouses, setFilteredHouses] = useState([]);
  useEffect(() => {
    if (!data) return;

    const housesArray = Object.values(data);
    if (!city) {
      setFilteredHouses(housesArray);
    } else {
      const filtered = housesArray.filter(
        (house) => house.city && house.city.toLowerCase() === city.toLowerCase()
      );
      setFilteredHouses(filtered);
    }
  }, [city, data]);

  gsap.registerPlugin(SplitText, useGSAP);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let split = SplitText.create(".short", { type: "chars" });
      gsap.from(split.chars, {
        duration: 1.5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.02,
      });

      return () => split.revert();
    });
    return () => ctx.revert();
  }, []);
  useGSAP(() => {
    gsap.to(".city", {
      opacity: 1,
      duration: 2,
      transformOrigin: "0% 50% -50",
      y: 40,
      ease: "back",
    });
  });
  if (!data) return <Loading />;
  if (!user)
    return (
      <div className="page">
        <img src="../Group19.png" alt="city" className="city" />
        <div className="info">
          <h1 className="short">
            Мы — сервис, который помогает студентам легко и быстро найти
            комфортное жильё рядом с учебными заведениями. Удобный поиск,
            проверенные объявления и поддержка на каждом этапе — всё, чтобы ваш
            переезд был простым и безопасным. Начните искать жильё уже сегодня!
          </h1>
          <img
            src="https://img.freepik.com/free-photo/happy-woman-pointing-up-with-her-finger_1098-1241.jpg?t=st=1743270352~exp=1743273952~hmac=bf909e9bf61d14f093aa98edfe2e12c35e0344843b7c0a475e518d67d652e629&w=740"
            alt=""
          />
        </div>
      </div>
    );
  return (
    <div className="page">
      <img src="../Group19.png" alt="city" className="city" />
      <div className="info">
        <h1 className="short">
          Мы — сервис, который помогает студентам легко и быстро найти
          комфортное жильё рядом с учебными заведениями. Удобный поиск,
          проверенные объявления и поддержка на каждом этапе — всё, чтобы ваш
          переезд был простым и безопасным. Начните искать жильё уже сегодня!
        </h1>
        <img
          src="https://img.freepik.com/free-photo/happy-woman-pointing-up-with-her-finger_1098-1241.jpg?t=st=1743270352~exp=1743273952~hmac=bf909e9bf61d14f093aa98edfe2e12c35e0344843b7c0a475e518d67d652e629&w=740"
          alt=""
        />
      </div>
      <div className="filter">
        <h1>Выберите город</h1>
        <h2>Предоставим жилища по дешёвой цене рядом с вашим вузом</h2>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Все города</option>
          <option value="Astana">Астана</option>
          <option value="Almaty">Алмата</option>
        </select>
      </div>
      <div className="cards">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house, index) => (
            <Card key={index} house={house} />
          ))
        ) : (
          <p>Нет доступных объявлений для выбранного города.</p>
        )}
      </div>
    </div>
  );
}
export default Main;
