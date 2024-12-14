import { useState, useEffect } from "react";

const AdvicePage = () => {
  const [maxxQuotes, setMaxxQuotes] = useState([
    "hello",
    "goodbye",
    "I am the Maxx",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAdvice = maxxQuotes[currentIndex];
  const [triggerAnimation, setTriggerAnimation] = useState(false); // New state to trigger animation

  const handleClick = () => {
    const pickRandomIndex = () => Math.floor(Math.random() * maxxQuotes.length); // Random index function

    setCurrentIndex(pickRandomIndex);
    setTriggerAnimation((prev) => !prev); // Toggle the animation trigger
    setTimeout(() => setTriggerAnimation(true), 50); // Delay before setting animation to true

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
              <div className="advice-container">
                <div className="advice-img"></div>
                <h6
                  key={triggerAnimation ? currentAdvice : undefined} // Ensure key changes
                  className={`advice-text ${triggerAnimation ? "animate" : ""}`} // Conditional class for animation
                >
                  {currentAdvice}
                </h6>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdvicePage;
