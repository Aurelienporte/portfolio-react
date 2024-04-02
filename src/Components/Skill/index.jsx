import "./skill.css";

function Skill({ name, level }) {
  return (
    <li className="skill">
      <h3 className="skill__title">{name}</h3>
      <div className={`skill__gauge ${level}`}></div>
      {level === "basics" && <p>Basique</p>}
      {level === "confirmed" && <p>Confirmé</p>}
      {level === "advanced" && <p>Avancé</p>}
    </li>
  );
}

export default Skill;
