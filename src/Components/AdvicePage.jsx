import { useState, useEffect } from "react";

const AdvicePage = () => {
  const [maxxQuotes, setMaxxQuotes] = useState([
    "hello",
    "goodbye",
    "I am the Maxx",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAdvice = maxxQuotes[currentIndex];

  const handleClick = () => {
    const pickRandomIndex = Math.floor(Math.random() * maxxQuotes.length);

    setCurrentIndex(pickRandomIndex);

    console.log(maxxQuotes);
  };

  // will need if we store data for quotes/audio in another file, which is likely
  // useEffect(() => {
  // }, []);

  return (
    <>
      <div>
        <h1>AdvicePage</h1>
        <div>
          <p>Well you made it this far... come on, pick my brain.</p>
          <button onClick={handleClick} className="ask-maxx-bttn">
            Ask The Maxx
          </button>
          {maxxQuotes && (
            <>
              (<p>{currentAdvice}</p>)
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdvicePage;
