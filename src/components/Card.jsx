function Card(house) {
  return (
    <div>
      <img src={house.image} alt="house" />
      <ul>
        <li>{house.bedrooms}</li>
        <li>{house.squareMeter}</li>
        <li>{house.pricePerMonth}</li>
        <li>{house.nearWith}</li>
      </ul>
    </div>
  );
}
export default Card;
