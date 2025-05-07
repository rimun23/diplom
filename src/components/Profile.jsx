import { useState, useEffect, useRef } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Profile({ user }) {
  const [info, setInfo] = useState(null);
  const profile = useRef();
  useEffect(() => {
    const getDataFire = async () => {
      const docRef = doc(db, "users", `${user.uid}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getDataFire();
    // eslint-disable-next-line
  }, []);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(profile, {
      duration: 1,
      transformOrigin: "0% 50% -50",
      y: -500,
      ease: "bounce.out",
      stagger: 0.02,
    });
  }, [info]);
  return (
    <div className="fullFullProfile" ref={profile}>
      <div className="cloud" id="cloud1">
        <div className="in_cloud">
          <div className="ball b1"></div>
          <div className="ball b2"></div>
          <div className="ball b3"></div>
          <div className="ball b4"></div>
          <div className="ball b5"></div>
        </div>
      </div>
      <div className="cloud" id="cloud2">
        <div className="in_cloud">
          <div className="ball b1"></div>
          <div className="ball b2"></div>
          <div className="ball b3"></div>
          <div className="ball b4"></div>
          <div className="ball b5"></div>
        </div>
      </div>
      {!info ? (
        <Loading />
      ) : (
        <div className="fullProfile">
          <h1>Ваш профиль</h1>
          <ul className="profile">
            <li>
              <h8>ФИО:</h8> {info.displayName}
            </li>
            <li>
              <h8>Номер телефона:</h8> {info.phoneNumber}
            </li>
            <li>
              <h8>email:</h8> {info.email}
            </li>
            <li>
              <h8>Адрес проживания:</h8> {info.address}
            </li>
            <li>
              <h8>Дата рождения:</h8> {info.birthDate}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Profile;
