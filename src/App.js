import './App.css';
import img from './asd.png';
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);

  const openImage = (item) => {
    setImage(item);
    setOpen(true);
  }

  const squares = (line) => {
    const vec = [];
    for (let i =0; i < 5; i++) {
      const item = 75 - ((line * 5) + (5 - i));
      vec.push(<div className="Col" onClick={() => openImage(item)} ></div>)
    }
    return vec
  }

  const rows = () => {
    const vec = [];
    for (let i = 0; i < 15; i++) {
      vec.push(<div className="Row">{ squares(i) }</div>)
    }
    return vec
  }

  return (
    <div className="App">
      <div className="Board">
        { rows() }
      </div>
      <div className={open ? "modal open" : "modal"} onClick={() => setOpen(false)}>
        <img src={img} alt="test" className="modal-content" id="img01" />
      </div>
    </div>
  );
}

export default App;
