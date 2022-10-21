import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { GregListProvider } from "./GregContext";

function App() {
  return (
    <div className="app">
      <GregListProvider>
        <Header />
        <ListingsContainer />
      </GregListProvider>
    </div>
  );
}

export default App;
