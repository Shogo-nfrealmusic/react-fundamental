import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = (e) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);
  };
  return (
    <div>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Form;
