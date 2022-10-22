import { useState, useEffect } from 'react';
import './App.css'
import data from './data'

function App() {
  const dataArr = data.slice(0, 4);
  const [cars, setCars] = useState(() => dataArr.sort(() => Math.random() - 0.5));

  const [clickedCard, setClickedCard] = useState([]);
  const [lost, setLost] = useState(false);

  const clicked = (id) => {
    setCars([...cars].sort(() => Math.random() - 0.5));
    if (clickedCard.indexOf(id) === -1) {
      setClickedCard(pre => pre.concat(id));
    } else {
      setLost(true);
    }
    console.log(clickedCard);
  }

  console.log(dataArr);

  useEffect(() => {
    if (lost === true) {
      setCars(dataArr.slice(0, 2));
      setLost(false);
    }
  }, [lost, dataArr]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="card-container">
        {cars.map(item => {
          return (
            <div className="card" key={item.id} onClick={() => clicked(item.id)}>
              <img src={item.src} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
