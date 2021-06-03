import './App.css';
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);

  const openImage = (item) => {
    import(`./imgs/${item + 1}.png`).then(image => {
      setImage(image.default);
    });
    setOpen(true);
  }

  const squares = (line) => {
    const vec = [];
    if (line % 2 === 0) {
      for (let i = 0; i < 5; i++) {
        const item = 75 - ((line * 5) + (5 - i));
        vec.push(<div className="Col" onClick={() => openImage(item)} ></div>)
      }
    } else {
      for (let i = 5; i > 0; i--) {
        const item = 75 - ((line * 5) + (5 - i)) - 1;
        vec.push(<div className="Col" onClick={() => openImage(item)} ></div>)
      }      
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
      <div className="Signature">
        Componente curricular: História da Arte<br/>
        Aluna: Isadora T. Peres<br/>
        Professor: Henrique Telles Neto<br/>
        I período, Design - UNOCHAPECÓ<br/>
        Linha do tempo usando como inspiração o jogo de tabuleiro snakes and ladders<br/>
      </div>
      <div className="Board">
        { rows() }
      </div>
      <div className={open ? "modal open" : "modal"} onClick={() => { setOpen(false); setImage(null) }}>
        <img src={image} alt="test" className="modal-content" id="img01" />
      </div>
    </div>
  );
}

export default App;
