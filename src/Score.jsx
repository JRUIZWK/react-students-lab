const Score = (props) => {
  return ( 
    <>
      <ul>
        {props.scores.map((score, idx) => 
            <div key={idx}>
            {score.score}: <span>{score.date}</span>
            </div>
            )}
      </ul>
    </>
  );
}

export default Score;