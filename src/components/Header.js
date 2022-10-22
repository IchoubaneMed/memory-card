import './Header.css'

const Header = (props) => {
    const {score, bestScore} = props;
    return(
        <div className="container">
            <h1>Memory card</h1>
            <div className="score">
                <h2>Score: {score}</h2> 
                <h2>Best score: {bestScore}</h2>
            </div>
        </div>
    );
}

export default Header;