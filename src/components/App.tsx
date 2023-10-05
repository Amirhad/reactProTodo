import React, { useEffect } from "react";
import { Header } from "./Header";
import ReactLoading from "react-loading";
import { useActions } from "../hooks/hook";
import { useTypedSelector } from "../hooks";
import styles from '../styles/todo.module.scss'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  checking: boolean;
  deleting: boolean;
}

export const App: React.FC = () => {
  const todos = useTypedSelector((state) => state.reducer.todos);
  const loading = useTypedSelector((state) => state.reducer.loading);

  const { loadTodos, removeTodo, updateCheck } = useActions();

  useEffect(() => {
    loadTodos();
  }, []);

  const handleDelete = (id: number) => {
    removeTodo(id);
  };

  const handleChecled = (id: number, completed: boolean) => {
    updateCheck(id, completed);
  };

  return (
    <div className={styles.container}>
      <Header todos={todos} />
      {loading ? (
        <ReactLoading color="blue" type="spin" width={30} height={30} />
      ) : (
        todos.map((item: Todo) => {
          return (
            <div className={styles.todo_wrapper}>
              <div className={styles.checkbox}>
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
              <div className={styles.todo}>{item.title}</div>
              <div className={styles.button}>
                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={item.deleting}
                >
                  удалить
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default App;
