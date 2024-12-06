function Hero({ todos_completed, total_todos }) {
  console.log(todos_completed, total_todos);
  return (
    <section>
      <div>
        <p>
          Completed {todos_completed} from {total_todos}
        </p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default Hero;
