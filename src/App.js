import { useState, useEffect } from 'react';
import './App.css'
import data from './data'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let dataArr = data;
  const [cars, setCars] = useState(() => dataArr.slice(0, 4).sort(() => Math.random() - 0.5));

  const [clickedCard, setClickedCard] = useState([]);
  const [lost, setLost] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const clicked = (id) => {
    setCars([...cars].sort(() => Math.random() - 0.5));
    if (clickedCard.indexOf(id) === -1) {

      setClickedCard(pre => pre.concat(id));

      setScore(pre => pre + 1);
      
      setLost(false);
    } else {
      setLost(true);
    }
    console.log(id)
    console.log(clickedCard);
  }

  


  useEffect(() => {
    if (lost === true) {
      setCars(dataArr.slice(0, 4).sort(() => Math.random() - 0.5));
      setScore(0);
      setClickedCard([]);
    }

    if(score >= 4 && score % 4 === 0 && score < 16) {
      setCars(dataArr.slice(0, score + 4).sort(() => Math.random() - 0.5))
    }

    if(score > bestScore) {
      setBestScore(pre => pre + 1);
    }
  }, [lost, score, bestScore, dataArr]);

  return (
    <div className="App">
      <div className="header">
        <Header score={score} bestScore={bestScore}/>
      </div>
      <div className="card-container">
        {cars.map(item => {
          return (
            <div className="card" key={item.id} onClick={() => clicked(item.id)}>
              <img src={item.src} alt={item.title} />
              <h1>{item.id}</h1>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
