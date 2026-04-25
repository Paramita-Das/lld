import { useState } from "react";
import "./voting-poll.css";

const VotingPoll = () => {
  const buttons = [
    { name: "Option 1", color: "red" },
    { name: "Option 2", color: "blue" },
    { name: "Option 3", color: "green" },
    { name: "Option 4", color: "yellow" },
  ];

  // State to track vote counts for each button
  const [counts, setCounts] = useState(Array(buttons.length).fill(0));

  const handleVote = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const getPercentage = (index: number) => {
    const totalVotes = counts.reduce((a, b) => a + b, 0);
    if (totalVotes === 0) return 0;
    return Number(((counts[index] / totalVotes) * 100).toFixed(2));
  };

  return (
    <div className="container">
      {buttons.map((button, index) => (
        <div className="voting-poll" key={index}>
            <h3>{getPercentage(index)}%</h3>
          <div className="bar-outer">
            <div
              className="bar-inner"
              style={{
                height: `${getPercentage(index)}%`,
                backgroundColor: button.color,
                transition: "height 0.3s",
              }}
            ></div>
          </div>
          <button onClick={() => handleVote(index)}>
            {button.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default VotingPoll;
