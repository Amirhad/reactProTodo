import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "./action";

function App() {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <>     

      {
        loading ? 'идет загрузка...' : (
          todos.map((item) => {
            return (
              <>
                <li className="text">{item.title}</li>;
              </>
            );
          })
        )
      }
    </>
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
