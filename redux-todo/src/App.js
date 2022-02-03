import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import { addTodo, editTodo, deleteTodo } from "./actions/todo/Todo";

function App() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [addInfo, setaddInfo] = useState({
    name: "",
    time: "",
  });
  const [editInfo, seteditInfo] = useState({
    name: "",
    time: "",
  });
  const [todoInfo, settodoInfo] = useState([]);

  useEffect(() => {
    settodoInfo(todo);
  }, [todo]);

  return (
    <div className="app">
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Name"
        value={addInfo.name}
        onChange={(e) => setaddInfo({ ...addInfo, name: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Time"
        value={addInfo.time}
        onChange={(e) => setaddInfo({ ...addInfo, time: e.target.value })}
      />
      <br />
      <button
        onClick={() => {
          dispatch(addTodo({ name: addInfo.name, time: addInfo.time }));
          setaddInfo({ name: "", time: "" });
        }}
      >
        ADD_TODO
      </button>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Edit name"
        value={editInfo.name}
        onChange={(e) => seteditInfo({ ...editInfo, name: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Edit time"
        value={editInfo.time}
        onChange={(e) => seteditInfo({ ...editInfo, time: e.target.value })}
      />

      <div className="todo_Info">
        <table>
          <thead>
            <th>Name</th>
            <th>Time</th>
            <th>Maipulations</th>
          </thead>
          <tbody>
            {todoInfo.map((todo) => (
              <tr className="inner" key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.time}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(editTodo({ id: todo.id, ...editInfo }));
                      seteditInfo({ name: "", time: "" });
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
