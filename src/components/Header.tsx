import styles from '../styles/header.module.scss'


interface todosProps {
 todos:Array<{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  checking: boolean;
  deleting: boolean;
 }> 
}


export const Header = ({ todos }:todosProps) => {
  return (
    <>
      <h1 className={styles.header_text}>Список дел:{todos.length}</h1>
    </>
  );
};



