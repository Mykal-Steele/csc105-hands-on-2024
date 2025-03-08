import { useState } from "react";

function List({ item, items, setItems }) {
  // track if completed
  const [done, setDone] = useState(false);

  // handle delete action
  function deleteThis(evt) {
    evt.stopPropagation();
    const newList = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i] !== item) {
        newList.push(items[i]);
      }
    }
    setItems(newList);
  }

  // handle edit action
  function changeText(evt) {
    evt.stopPropagation();
    const newName = prompt("what should we call this?");
    if (!newName) return;

    const updatedItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        updatedItems.push({ ...items[i], name: newName });
      } else {
        updatedItems.push(items[i]);
      }
    }
    setItems(updatedItems);
  }

  // toggle completion status
  function toggleDone() {
    setDone(!done);
  }

  return (
    <div
      className="list_box"
      onClick={toggleDone}
      style={{
        backgroundColor: done ? "rgba(214, 255, 196, 0.87)" : "white",
      }}
    >
      <p className="item_name">{item.name}</p>
      <button onClick={changeText} className="edit_button">
        Edit
      </button>
      <button onClick={deleteThis} className="remove_button">
        Remove
      </button>
    </div>
  );
}

export default List;
