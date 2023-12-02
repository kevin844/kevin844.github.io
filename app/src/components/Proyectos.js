import './images/discordBot.png'

/*
    skills:
    languaje:python, php.
    framework: flask, django, laravel.
    databases: mysql, postgresql.
    front-end: html, css, javascript, bootstrap.
    front-end frameworks: react, react native
    version control: git, github.
    Testing: pytest, unittest PHPUnit, Behat.
    Integration (CI/CD): Jenkins docker, aws.
    Infrastructure as code: Ansible -chef-.
    DevSecOps: Owasp ZAP, BurpSuite, nmap...

    Agile, scrum.
*/

function Proyectos(){
    return(
        <div className='proyectos'>
            <h2>Proyectos</h2>
            <div>
                <img src="discordBot.png" />
                <h3>Project 1</h3>
            </div>
        </div>
    );
}

export default Proyectos;