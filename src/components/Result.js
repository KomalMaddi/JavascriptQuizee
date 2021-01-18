import React from "react";

const Result=({score, playAgain}) => (
    <div className="score-card">
        <div className="score"> Your score is {score} out of 5
        </div>
        <button className="playBtn" onClick={playAgain}>Play Again!</button>
    </div>

)

export default Result;