import React from "react";

const App: React.FC = () => {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>shewmaps</h1>
      <p style={styles.tagline}>Exploration & Thru-Hiking • Software & GIS Development</p>

      {/* Vertical 1: Exploration / Thru-Hiking */}
      <section style={styles.section}>
        <h2>Exploration & Thru-Hiking</h2>
        <p>
          Completed multiple long-distance hikes, each shaping my perspective and storytelling.
          Trail notes, reflections, and future journeys continue to inspire both writing and software projects.
        </p>
        <p><strong>Authorship:</strong> Books and essays derived from these experiences.</p>
        <p><strong>Media:</strong> Future YouTube documentation of trails, observations, and insights.</p>
      </section>

      {/* Vertical 2: Software / GIS Development */}
      <section style={styles.section}>
        <h2>Software & GIS Development</h2>
        <p>
          Experience as a software consultant building tools for companies. Expanding into GIS projects, interactive maps, and geospatial software.
        </p>
        <p><strong>Authorship:</strong> Writing about GIS, mapping, and insights from building software.</p>
        <p><strong>Media:</strong> Future tutorials, demos, and content sharing knowledge and projects.</p>
      </section>

      {/* Connect */}
      <section style={styles.section}>
        <h2>Connect</h2>
        <p>Reach out for collaboration, consulting, or to discuss trails and mapping.</p>
      </section>
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: { maxWidth: 720, margin: "80px auto", fontFamily: "system-ui", lineHeight: 1.6, padding: "20px" },
  title: { fontSize: 42 },
  tagline: { color: "#666", marginBottom: 40 },
  section: { marginTop: 40 }
};

export default App;