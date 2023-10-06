const Pagination = ({ pokemons, previous, next, setUrl }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setUrl(previous)}
        className={`pagination__button ${previous && "active"}`}
      >
        &lt;
      </button>
      <button
        onClick={() => setUrl(next)}
        className={`pagination__button ${next && "active"}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
