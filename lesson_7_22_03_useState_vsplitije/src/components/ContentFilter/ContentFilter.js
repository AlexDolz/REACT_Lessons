const ContentFilter = props => {
  const { deleteCardById, changeCheck, getSalesPrice, setDefaultPrice } = props;

  return (
    <div>
      <button onClick={deleteCardById}>Delete Product by ID</button>
      <button onClick={changeCheck}>Check Product by ID</button>
      <button onClick={getSalesPrice}>
        Change Product price with discount on 25%
      </button>
      <button onClick={setDefaultPrice}>Set default price</button>
    </div>
  );
};

export default ContentFilter;
