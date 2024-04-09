import "./listItem.css";

function ListItem({ label, title, children }) {
  return (
    <li className="list-item">
      <p className="list-item__small-text">{label}</p>
      <h3 className="list-item__title">{title}</h3>
      {children}
    </li>
  );
}

export default ListItem;
