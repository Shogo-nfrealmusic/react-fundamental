import { useState } from "react";

const Item = ({ todo, complete, updateTodo }) => {
  const [edit, setEdit] = useState(todo.content);

  const changeContent = (e) => {
    setEdit(e.target.value);
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updateTodo(newTodo);
  };

  const comfirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, editing: !todo.editing, content: edit };
    updateTodo(newTodo);
  };
  return (
    <>
      <div key={todo.id}>
        <button onClick={() => complete(todo.id)}>完了</button>
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
