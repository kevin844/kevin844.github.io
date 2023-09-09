
function About() {
    const skills = [
        {
            category: "Desarrollo Frontend",
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
            category: "Desarrollo Backend",
            list: [
                "Python",
                "Django",
                "Flask",
                "PHP",
                "Laravel",
                "RESTful APIs",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Apache",
            ],
        },
        {
            category: "Bases de Datos",
            list: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        },
        {
            category: "Control de Versiones",
            list: ["Git", "GitHub"],
        },
        {
            category: "Herramientas de Desarrollo",
            list: ["Visual Studio Code", "Nvim"],
        },
        {
            category: "Pruebas y Depuración",
            list: [
                "Jest",
                "Selenium",
                "Postman",
                "Chrome DevTools",
                "React Testing Library",
            ],
        },
        {
            category: "Despliegue y Gestión de Infraestructura",
            list: [
                "AWS (Amazon Web Services)",
                "Azure",
                "Docker",
                "Kubernetes",
                "Ansible",
                "Vercel",
                "Jenkins",
                "Travis CI",
            ],
        },
    ];

    return (
        <div>

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

/*
    <div>
      <h2>About Me</h2>
      <p>
        ¡Hola! Soy un desarrollador fullstack con experiencia en una amplia gama de tecnologías y herramientas de desarrollo. Mi pasión por la programación me ha llevado a trabajar tanto en el desarrollo frontend como en el backend, lo que me permite crear aplicaciones web completas y funcionales.
      </p>
      <div className="skills-container">
        <div className="column">
          <h3>Backend</h3>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>RESTful APIs</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Apache</li>
          </ul>
        </div>
        <div className="column">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>AJAX</li>
            <li>JSON</li>
          </ul>
        </div>
        <div className="column">
          <h3>Bases de Datos</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ul>
        </div>
        <div className="column">
          <h3>Control de Versiones</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="column">
          <h3>Herramientas de Desarrollo</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Nvim</li>
          </ul>
        </div>
        <div className="column">
          <h3>Pruebas y Depuración</h3>
          <ul>
            <li>Jest</li>
            <li>Selenium</li>
            <li>Postman</li>
            <li>Chrome DevTools</li>
            <li>React Testing Library</li>
          </ul>
        </div>
        <div className="column">
          <h3>Despliegue y Gestión de Infraestructura</h3>
          <ul>
            <li>AWS (Amazon Web Services)</li>
            <li>Azure</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Ansible</li>
            <li>Vercel</li>
            <li>Jenkins</li>
            <li>Travis CI</li>
          </ul>
        </div>
      </div>
    </div>


<div id="about" className="about-content">
            <h2>About Me</h2>
            <p>
                Hello! I am a fullstack developer passionate about technology and creating innovative solutions. With experience in developing web and mobile applications, I have worked on challenging and exciting projects that have allowed me to improve my skills and knowledge.
                <br />
                <br />
                My main focus is building scalable and efficient applications using the latest technologies and tools. I love working as a team and collaborating with other developers to achieve the best results. In addition, I like to learn new things and keep up to date with technological trends and advances.
                <br />
                <br />
                I am always looking for new challenges and opportunities to apply my skills and knowledge. If you are looking for a reliable and committed fullstack developer, feel free to contact me. I am sure that we can work together to create innovative and successful solutions.
            </p>
            <hr />
        </div>
*/