import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="side-column-wrapper">
          {/* <div className="side-column"></div> */}
          <div className="other-side-column"></div>
          <div className="inner-side-column"></div>
        </div>

        <div className="main-content">
          <div className="top-image"></div>
          <h1>
            Welcome to <span style={{ color: "yellow" }}>Ask</span>{" "}
            <span>The</span> <span style={{ color: "darkorchid" }}>Maxx</span>
          </h1>
          <div>
            <p>
              Oh... hey. Didn't see you there. Welcome to{" "}
              <strong>The Maxx's Therapy Cave</strong>. Or, uh, whatever you
              wanna call this... <em>place</em>.
            </p>

            <p>
              You probably have questions, right? Maybe you're confused... Maybe
              you're lost... You don't know what's real, what's in your head, or
              why you keep hearing weird voices or seeing people who aren't
              really there. Trust me, I get it. I know all about feeling lost.
            </p>

            <p>
              Yeah, <strong>I’m</strong> a little bit messed up. But hey, I'm
              not the one who's lost. You're the one who's come to <em>me</em>,
              right? So maybe... just maybe... that means you need some
              guidance. You want answers. You want someone to talk to, someone
              who <em>gets it</em>.
            </p>

            <p>
              Well, lucky for you, I’m your man. I might not always make sense.
              I might say things that <em>sound</em> like gibberish. But deep
              down, underneath the noise, there's wisdom in there. I’ve been
              through... a lot. And you can ask me anything. No questions are
              off limits. Who am I? What’s real? What is <em>all</em> this?
            </p>

            <p>
              <em>Hmph</em>... I may not be a professional, but I’m pretty sure
              I know more about surviving this crazy world than most. Plus, I’ve
              got a button for you to press. Just... go ahead and click it.
              You’ll get some random wisdom straight from my brain —{" "}
              <em>or whatever this thing is</em> — and it’s free. No charge.
              Just me, talking to you.
            </p>

            <p>
              Sometimes, the answers come in flashes. Sometimes, it’s not what
              you want to hear, but it’s what you need to know. So, if you’re
              ready...
              <br />
              <br />
              <strong>Click the button.</strong>
            </p>

            <p>
              Maybe you’ll find something that helps. Maybe you won’t. But hey,{" "}
              <strong>I’m</strong> not the one who needs help, right?
            </p>

            <p>You are. So... ask away. I'm waiting.</p>

            <button>Get Maxx's Advice</button>
          </div>
        </div>

        <div className="side-column-wrapper">
          <div className="inner-side-column"></div>
          {/* <div className="side-column"></div> */}
          <div className="other-side-column"></div>
        </div>
      </div>
    </>
  );
}

export default App;
