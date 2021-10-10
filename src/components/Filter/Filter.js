import { v4 as uuid } from "uuid";

const nameId = uuid();

export const Filter = ({ value, onChange }) => (
  <label htmlFor={nameId}>
    Find contact by name
    <input
      id={nameId}
      onChange={onChange}
      type="text"
      name="filter"
      value={value}
      placeholder="Enter contact name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
  </label>
);
