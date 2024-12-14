import "../App.css";

const InfoPage = () => {
  return (
    <div className="info-container">
      <h1>Welcome to The Maxx's World</h1>
      <h2>Exploring the Depth of Reality and Perception</h2>
      <p>
        <strong>The Maxx</strong> is more than a comic book; it’s a journey into
        the mind. Created by Sam Kieth, this series delves into themes of
        trauma, identity, and the blurred lines between reality and fantasy. At
        its core, it is a story about human fragility, survival, and the
        creative ways our minds protect us from pain.
      </p>
      <p>
        The comic masterfully weaves together two worlds: the gritty urban
        streets where Maxx appears as a homeless man and the ethereal Outback—a
        dreamlike realm where he becomes a hero. These two realities collide,
        raising questions about what is real and what is constructed by the
        psyche to cope with life's challenges.
      </p>
      <h2>Why Make Maxx the Shrink?</h2>
      <p>
        In the comic, Maxx himself struggles with understanding his reality.
        Constantly at odds with his perception of the world, he is the perfect
        character to take on the role of a therapist—one who embraces the chaos
        of the human mind and its defenses. By placing Maxx in this position, we
        create a space for introspection and humor, mirroring his unique blend
        of wisdom and confusion.
      </p>
      <p>
        Maxx’s role as a "shrink" in this context is both ironic and poignant.
        He is not a typical hero or guide. Instead, he represents the internal
        struggles we all face and the moments when clarity emerges from the
        midst of chaos. It's about embracing imperfection and finding meaning in
        uncertainty.
      </p>
      <div className="button-container">
        <button className="back-button" onClick={() => alert("Go back!")}>
          Back to Main Page
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
