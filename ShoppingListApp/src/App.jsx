import { useState } from "react";
import List from "../components/List";
import "./App.css";

function App() {
  // store list items and input text
  const [stuff, setStuff] = useState([]);
  const [text, setText] = useState("");

  // add new item to list
  function addStuff(evt) {
    evt.preventDefault();

    // check for empty input
    if (!text.trim()) return;

    // create unique id for each item
    const timestamp = new Date().getTime();

    // add new item to list
    const newStuff = [...stuff];
    newStuff.push({
      id: timestamp,
      name: text,
    });

    setStuff(newStuff);
    setText("");
  }

  // update input field
  function updateText(evt) {
    setText(evt.target.value);
  }

  return (
    <>
      <div className="shopping_list">
        <h1>Shopping List</h1>
        <div className="add-item">
          <form onSubmit={addStuff}>
            <input
              type="text"
              placeholder="Add a item"
              className="input_field"
              value={text}
              onChange={updateText}
            />
            <button type="submit" className="submit_button">
              Add
            </button>
          </form>
        </div>
        {stuff.length === 0 ? (
          <p>no items yet, add something!</p>
        ) : (
          stuff.map((thing) => (
            <List
              key={thing.id}
              item={thing}
              items={stuff}
              setItems={setStuff}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
