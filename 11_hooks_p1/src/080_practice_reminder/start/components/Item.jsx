import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [edit, setEdit] = useState(todo.content);

  const dispatch = useDispatchTodos();

  const changeContent = (e) => {
    setEdit(e.target.value);
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    dispatch({ type: "todo/update", todo: newTodo });
  };

  const comfirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, editing: !todo.editing, content: edit };
    dispatch({ type: "todo/update", todo: newTodo });
  };

  const complete = (todo) => {
    dispatch({ type: "todo/delete", todo });
  };
  return (
    <>
      <div key={todo.id}>
        <button onClick={() => complete(todo)}>完了</button>
        <form onSubmit={comfirmContent} style={{ display: "inline-block" }}>
          {todo.editing ? (
            <input type="text" value={edit} onChange={changeContent} />
          ) : (
            <span onDoubleClick={toggleEditMode}>{todo.content}</span>
          )}
        </form>
      </div>
    </>
  );
};

export default Item;
