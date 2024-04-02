import "./sectionWrapper.css";

function SectionWrapper({ id, title, listClass, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <ul className={listClass}>{children}</ul>
    </section>
  );
}

export default SectionWrapper;
