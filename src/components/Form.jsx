function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    // Reset the form
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Place your task"
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}

export default Form;
