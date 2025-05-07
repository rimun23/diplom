function Card({ house }) {
  return (
    <div className="card">
      <img src={house.image} alt="house" className="houseImg" />
      <ul>
        <li>кол-во комнат: {house.bedrooms}</li>
        <li>кол-во кв. м.: {house.squareMeter}</li>
        <li>цена за месяц: {house.pricePerMonth}</li>
        <li>ближайший университет: {house.nearWith}</li>
        <li>
          Желаете арендовать? Позвоните по данному номеру: <br />{" "}
          {house.phoneNumber}
        </li>
      </ul>
    </div>
  );
}
export default Card;
