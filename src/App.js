import { useEffect, useState } from "react";
import './app.css'
function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("не удалось сделать запрос на сервер");
        }
        return response.json();
      })
      .then((nug) => {
        setData(nug);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {data.map((item) => {
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
      })}
    </>
  );
}

export default App;
