import React, { createContext, useEffect, useState } from "react";

const GregListContext = createContext();

function GregListProvider({ children }) {
  // set initial state
  const [listing, setListing] = useState([]);
  const [errors, setErrors] = useState([]);

  // updates state for searching
  const [wordSearch, setWordSearch] = useState("");

  //sets the default state of the favorite
  const [favorite, setFavorite] = useState(false);

  // gets the items from the database
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => {
        setListing(data.filter(item => item.description.includes(wordSearch)));
        setErrors([]);
      })
      .catch((err) => setErrors([...err]));
  }, [wordSearch]);

  // Deletes item onclick of the delete button
  const onDeleteCard = (item) => {
    console.log(item);
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => handleDeleteItem(item));
  };

  // updates state when an item is deleted
  function handleDeleteItem(deletedItem) {
    const updatedItems = listing.filter((item) => item.id !== deletedItem.id);
    setListing(updatedItems);
  }

  function handleChange(event) {
    const value = event.target.value;
    setWordSearch(value);
 
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(wordSearch);
    const filterdItems = listing.filter((item) => {
      return item.description.toLowerCase().includes(wordSearch.toLowerCase());
    });
    setListing(filterdItems);
  }

  const onClickFavorite = () => {
    setFavorite((prevFavorite) => (prevFavorite = !prevFavorite));
  };

  const gregValues = {
    listing,
    errors,
    favorite,
    wordSearch,
    handleDeleteItem,
    onClickFavorite,
    onDeleteCard,
    handleChange,
    handleSubmit,
  };

  return (
    <GregListContext.Provider value={gregValues}>
      {children}
    </GregListContext.Provider>
  );
}

export { GregListContext, GregListProvider };
