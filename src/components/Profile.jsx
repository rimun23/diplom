import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";
function Profile({ user }) {
  const [info, setInfo] = useState(null);
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
  }, []);

  return (
    <div className="fullFullProfile">
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
