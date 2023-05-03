export function Filters (props) {
  const { limit, changeLimit, sort, changeSort } = props;
  return (
    <div id="filters">
      <button onClick={changeLimit}>
        Product Limit: {limit}
      </button>
      <button onClick={changeSort}>
        Sort: {sort}
      </button>
    </div>
  )
}