export function Filters (props) {
  const { limit, changeLimit } = props;
  return (
    <div id="filters">
      <button onClick={changeLimit}>
        Product Limit: {limit}
      </button>
      <button>Sort: DESC</button>
    </div>
  )
}