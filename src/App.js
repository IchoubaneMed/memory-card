import { useState, useEffect } from 'react';
import './App.css'
import data from './data'

function App() {

  const [cars, setCars] = useState(() => data.sort(() => Math.random() - 0.5));
  const [clickedCard, setClickedCard] = useState([]);
  const [lost, setLost] = useState(false);

  const clicked = (id) => {
    setCars([...cars].sort(() => Math.random() - 0.5));
    if(clickedCard.indexOf(id) === -1) {
      setClickedCard(pre => pre.concat(id));
    } else {
      setLost(true);
    }
    console.log(clickedCard);
    console.log(lost);
  }

  useEffect(() => {
    if(lost === true) {
      setCars(data.slice(0, 2));
      setLost(false);
    }
  }, [lost]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="card-container">
        {cars.map(item => {
          return (
            <div className="card" key={item.id} onClick={() => clicked(item.id)}>
              <img src={item.src} alt={item.title} />
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
