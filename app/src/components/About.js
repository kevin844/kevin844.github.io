
function About() {
  const skills = [
    {
      category: "Front-end Development",
      list: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "jQuery",
        "Bootstrap",
        "AJAX",
        "JSON",
      ],
    },
    {
      category: "Back-end Development",
      list: [
        "Python",
        "Django",
        "Flask",
        "PHP",
        "Laravel",
        "RESTful APIs",
        "Apache",
      ],
    },
    {
      category: "Databases",
      list: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"],
    },
    {
      category: "Version control",
      list: ["Git", "GitHub"],
    },
    {
      category: "Development Tools",
      list: ["Visual Studio Code", "Nvim"],
    },
    {
      category: "Testing and Debugging",
      list: [
        "Jest",
        "Selenium",
        "Postman",
        "Chrome DevTools",
        "React Testing Library",
      ],
    },
    {
      category: "Infrastructure Deployment and Management",
      list: [
        "AWS (Amazon Web Services)",
        "Docker",
        "Ansible",
        "Jenkins",
        "Travis CI",
      ],
    },
  ];

  return (
    <div className="about-component">

      <div id="about" class="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I am a fullstack developer passionate about technology and creating innovative solutions.
          With experience in developing web and mobile applications, I have worked on challenging and exciting projects that have allowed me to improve my skills and knowledge.
          <br />
          <br />My main focus is building scalable and efficient applications using the latest technologies and tools.
          I love working as a team and collaborating with other developers to achieve the best results.
          In addition, I like to learn new things and keep up to date with technological trends and advances
          .<br />
          <br />I am always looking for new challenges and opportunities to apply my skills and knowledge.
          If you are looking for a reliable and committed fullstack developer, feel free to contact me.
          I am sure that we can work together to create innovative and successful solutions
          .</p>
        <hr />
      </div>

      <div className="skillsColumn">
        <div className="colSkill">
          {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
            <div key={index}>
              <h3>{skill.category}</h3>
              <ul>
                {skill.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="colSkill">
          {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
            <div key={index}>
              <h3>{skill.category}</h3>
              <ul>
                {skill.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
