import "../styles/About.css";

function About() {
  const recent = (
    <p>
      I am currently a <b>Software Engineer</b> at
      <a href="https://www.ovarro.com/"> Ovarro</a>, where I help build SCADA
      software for major water companies. I recently graduated with a First
      Class Honours in Computer Science.
    </p>
  );

  return (
    <div id="about">
      <div className="section-header">
        <span className="section-title"> about me</span>
      </div>
      <div className="aboutContent">{recent}</div>
    </div>
  );
}

export default About;
