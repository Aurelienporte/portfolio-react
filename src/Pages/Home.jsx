import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
import Card from "../Components/Card";
import Skill from "../Components/Skill";
import Footer from "../Components/Footer";

import "./home.css";

import skills from "../assets/skills.json";
import codePen from "../assets/codepen.js";
import projects from "../assets/projects.js";
console.log(codePen);

function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="presentation">
          <h2 className="presentation__title">
            Intégrateur web passionné,
            <br />
            pour un web responsive et accessible.
          </h2>
          <p className="presentation__p">
            Sensible aux enjeux UX/UI,
            <br />
            je transforme vos idées
            <br />
            en expériences web remarquables.
          </p>
        </section>
        <SectionWrapper
          id="projects"
          title="Projets"
          listClass="projects__list"
        >
          {projects.map((project) => {
            return (
              <Card
                backTitle="Contexte et intervention"
                backImage={project.backImage}
                description={project.description}
                links={project.links}
                languages={project.languages}
                frontTitle={project.title}
                subtitle={project.subtitle}
                key={project.title}
                cover={project.cover}
              ></Card>
            );
          })}
        </SectionWrapper>
        <SectionWrapper id="codepen" title="CodePen" listClass="projects__list">
          {codePen.map((pen) => {
            return (
              <Card
                backImage={pen.backImage}
                backTitle="Description"
                description={pen.description}
                links={pen.links}
                languages={pen.languages}
                frontTitle={pen.title}
                subtitle={pen.subtitle}
                key={pen.title}
                cover={pen.cover}
              ></Card>
            );
          })}
        </SectionWrapper>
        <SectionWrapper
          id="skills"
          title="Compétences"
          listClass="skills__list"
        >
          {skills.map((skill) => {
            return (
              <Skill
                name={skill.name}
                level={skill.level}
                key={skill.name}
              ></Skill>
            );
          })}
        </SectionWrapper>
        <SectionWrapper
          id="education"
          title="Formation"
          listClass="education__list"
        >
          <li className="school">
            <p className="school__category">Web</p>
            <h3 className="school__name">Openclassrooms</h3>
            <p className="school__option">Parcours Intégrateur web</p>
          </li>
          <li className="school">
            <p className="school__category">Artistique</p>
            <h3 className="school__name">
              &Eacute;cole des beaux-arts de Cergy
            </h3>
            <p className="school__option">Parcours art contemporain</p>
          </li>
        </SectionWrapper>
        <SectionWrapper id="contact" title="Contact" listClass="contact__list">
          <li className="contact">
            <p className="contact__text">Me contacter</p>
            <h3 className="contact__title">Par e-mail</h3>
            <a href="mailto:@aurel.porte@gmail.com" className="contact__mail">
              <i className="fa-regular fa-envelope"></i>
              Envoyer un message
            </a>
          </li>
          <li className="contact">
            <p className="contact__text">Me retrouver</p>
            <h3 className="contact__title">Sur les réseaux</h3>
            <ul className="contact__socials-list">
              <li>
                <a href="https://codepen.io/qsgfhydfuk-ieeokdtkd">
                  <i className="fa-brands fa-codepen"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aur%C3%A9lien-port%C3%A9-b7a246281/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Aurelienporte">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </li>
        </SectionWrapper>
      </main>

      <Footer></Footer>
    </>
  );
}

export default Home;
