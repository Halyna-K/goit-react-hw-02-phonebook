import s from "./ContactList.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>
          {name}: {number}
        </p>
        <Button
          variant="outline-secondary"
          // className={s.btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </Button>
      </li>
    ))}
  </ul>
);
