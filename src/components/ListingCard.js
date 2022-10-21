import React, { useContext } from "react";
import { GregListContext } from "./GregContext";


function ListingCard({itemDescription,itemImage,itemLocation,item}) {
  const {onDeleteCard, onClickFavorite, favorite} = useContext(GregListContext)

  return (
    <li className="card">
      <div className="image">
        <span className="price"> $0 </span>
        <img src={itemImage} alt={itemDescription} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={onClickFavorite}>
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={onClickFavorite}>
            ☆
          </button>
        )}
        <strong> {itemDescription} </strong> <span> ·{itemLocation} </span>
        <button className="emoji-button delete" onClick={ () => onDeleteCard(item) }>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
