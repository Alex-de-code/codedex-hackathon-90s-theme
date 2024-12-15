import { useState, useEffect } from "react";

const AdvicePage = () => {
  const maxxQuotes = [
    "I am the Maxx.",
    "I don't have a TV now, but that's okay. The shows in my mind are almost always better.",
    "Sometimes it's luck that saves them. Sometimes it's fate.",
    "Great. Where the heck am I now?",
    "These hands - each as strong as a man, hungry as death - they will drag a man down to nothingness. To oblivion! It's starting to fade. It's starting to come back to me now. Back to Australia. Not the Australia they teach you about in the cities - the Outback. No, the *real* Australia: the smoking caves, the gods who eat mountains, the flying dragos, the rivers of gold, the Leopard Queen taunting me, almost an enemy, beautiful and feral as the great beasts she runs with. Still, she inspires me. For her I can be...",
    "It has no predators; it is just... stupid.",
    "Answer your phone.",
    "Then it wasn't all a dream. Unless I'm dreaming now.",
    "She helped people by controlling them, hoping to smother her own pain. And, somewhere in the wild land, in the land of dreams, in Pangaea, her inner-self was imprisoned by her own self-loathing.",
    "OUCHIE.",
    "She helped by controlling them...hoping to smother her own pain...something like that.",
  ];

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
      <div
        style={{
          backgroundColor: "black",
          // backgroundImage:
          //   "url(https://res.cloudinary.com/dvmczcg3f/image/upload/v1734136524/Codedex%2090s%20Themed%20Hackathon%20-%20Ask%20The%20Mask%20Assets/Screenshot_2024-12-13_at_7.18.24_PM_v0h9j0.png)",
          // width: "100%",
          // height: "50px",
          // backgroundSize: "contain",
          // backgroundRepeat: "repeat",
        }}
      >
        <div className="advice-page-wrapper">
          {maxxQuotes && (
            <>
              <div className="advice-container">
                <div style={{ background: "#290a31", padding: "20px" }}>
                  <div className="advice-img"></div>
                  <button
                    onClick={handleClick}
                    className="ask-maxx-bttn"
                    style={{ marginTop: "20px" }}
                  >
                    Ask The Maxx
                  </button>
                </div>
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
