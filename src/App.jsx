import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    value === "" ? alert(`Please fill out the task!`) : setTodos([...todos, { id: uuidv4(), name: value }]);
    setValue("");
  };

  const deletedTodo = (id) => {
    setTodos((item) => {
      return item.filter((item) => item.id !== id);
    });
  };

  const editTodo = (id, value) => {
    let newValue = prompt("", value);
    setTodos((item) => {
      return item.map((element) => {
        if (element.id === id) {
          element.name = newValue;
        }
        return element;
      });
    });
  };
  return (
    <>
      <div className="container">
        <a href="https://github.com/sardor-code/react-todos.git" className="link-info h1 ">
          Repo
        </a>
        <form onSubmit={submit}>
          <div className="d-flex my-4">
            <input
              type="text"
              placeholder="Todo Text..."
              className="form-control ms-auto "
              style={{ width: "450px" }}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button className="btn btn-primary ms-2 me-auto">Add</button>
          </div>
        </form>

        <ul className="list-group ms-auto me-auto list-unstyled">
          {todos?.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item ms-auto me-auto d-flex justify-content-between"
                style={{ width: "500px" }}
              >
                <p className="text-black my-2">{item.name}</p>
                <div className="d-flex">
                  <button
                    className="btn btn-success me-1"
                    onClick={() => {
                      editTodo(item.id, item.name);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deletedTodo(item.id);
                    }}
                    className="btn btn-danger ps-3 pe-3"
                  >
                    &times;
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
