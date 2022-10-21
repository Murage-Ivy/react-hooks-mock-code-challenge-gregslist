import React, { useContext } from "react";
import { GregListContext } from "./GregContext";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const { listing,errors } = useContext(GregListContext);
  const listOfCardItems = listing.map((item) => (
    <ListingCard
      key={item.id}
      itemId={item.id}
      itemDescription={item.description}
      itemImage={item.image}
      itemLocation={item.location}
      item={item}
    />
  ));

  return (
    <main>
      <ul className="cards">
        {errors.length > 0 ? (
          <h2 style={{ color: "red" }}>
            Errors
            {errors.map((error) => (
              <li style={{ color: "red" }}>{error}</li>
            ))}
          </h2>
        ) : null}
        {listOfCardItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
