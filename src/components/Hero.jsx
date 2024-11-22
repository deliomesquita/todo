function Hero(completed, total) {
  return (
    <section>
      <div>
        <p>
          Completed {completed} from {total}
        </p>
      </div>
      <div>
        {completed}/{total}
      </div>
    </section>
  );
}

export default Hero;
