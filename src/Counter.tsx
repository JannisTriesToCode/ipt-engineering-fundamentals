import { useState } from "react";

const EXTRA_CLICKS_AT_THREE = 3;
const FUNNY_GIF_URL = "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif";

function Counter() {
  const [count, setCount] = useState(0);
  const [extraClicksAtThree, setExtraClicksAtThree] = useState(0);
  const [showFunnyGif, setShowFunnyGif] = useState(false);

  const handleClick = () => {
    if (count !== 3) {
      setCount(count + 1);
      return;
    }

    if (extraClicksAtThree < EXTRA_CLICKS_AT_THREE - 1) {
      setExtraClicksAtThree(extraClicksAtThree + 1);
      return;
    }

    setExtraClicksAtThree(0);
    setShowFunnyGif(true);
    setCount(count + 1);
  };

  const remainingClicks = EXTRA_CLICKS_AT_THREE - extraClicksAtThree;

  return (
    <div className="card">
      <button onClick={handleClick}>
        count is {count}
      </button>

      {count === 3 && (
        <p className="counter-status">
          Three is sticky. Click {remainingClicks} more time{remainingClicks === 1 ? "" : "s"} to move on.
        </p>
      )}

      {showFunnyGif && (
        <img
          className="counter-gif"
          src={FUNNY_GIF_URL}
          alt="Funny celebration gif"
        />
      )}
    </div>
  );
}

export default Counter;
