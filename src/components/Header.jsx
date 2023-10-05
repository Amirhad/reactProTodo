export const Header = ({ todos }) => {
  return (
    <>
      <h1 className="header-text">Список дел:{todos.length}</h1>
    </>
  );
};
