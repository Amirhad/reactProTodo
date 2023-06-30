import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, removeTodo, updateCheck } from "./action";
import Header from "./Header";
import ReactLoading from "react-loading";

function App() {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChecled = (id, completed) => {
    dispatch(updateCheck(id, completed));
  };

  return (
    <div className="container">
      <Header todos={todos} />
      {loading
        ? <ReactLoading
        color="blue"
        type="spin"
        width={30}
        height={30}
      />
        : todos.map((item) => {
            return (
              <div className="todo_wrapper">
                <div className="checkbox">
                  {item.checking ? (
                    <ReactLoading
                      color="blue"
                      type="spin"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleChecled(item.id, item.completed)}
                    />
                  )}
                </div>
                <div className="todo">{item.title}</div>
                <div className="button">
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={item.deleting}
                  >
                    удалить
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default App;

//  ----------  первая задача ----------

// const [data, setData] = useState([]);
// const url = "https://jsonplaceholder.typicode.com/todos";

// useEffect(() => {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error("не удалось сделать запрос на сервер");
//       }
//       return response.json();
//     })
//     .then((nug) => {
//       setData(nug);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }, []);

/* {data.map((item) => {
        let classTodo;
        if (item.completed === true) {
          classTodo = "noText";
        } else {
          classTodo = "text";
        }
        return (
          <div className="center">
            <ul>
              <li className={classTodo} >{item.title}</li>
            </ul>
          </div>
        );
      })} */
