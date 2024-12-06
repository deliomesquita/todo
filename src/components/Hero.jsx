function Hero({ todos_completed, total_todos }) {
  console.log(todos_completed, total_todos);
  return (
    <section>
      <div>
        <div>
          <p>Task Done</p>
          <p>Keep it up</p>
        </div>
        <div>
          {todos_completed}/{total_todos}
        </div>
      </div>
    </section>
  );
}

export default Hero;
