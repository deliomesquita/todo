import Item from "./Item";

function List({ todos }) {
  return (
    <ol className="list">
      {todos && todos.length > 0 ? (
        todos.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default List;