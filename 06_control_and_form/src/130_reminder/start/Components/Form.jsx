import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
