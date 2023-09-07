import "./card-list.styles.css";
import Card from "../card/card.component";
const CardList = (props) => {
  const { displayCards } = props;
  console.log(displayCards);
  return (
    <div className="card-list">
      {displayCards.map((card) => {
        return <Card card={card} id={card.id} />;
      })}
    </div>
  );
};
export default CardList;
