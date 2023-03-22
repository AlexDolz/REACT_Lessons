const ContentFilter = props => {
  const { deleteCardById } = props;

  return (
    <div>
      <button onClick={deleteCardById}>Delete Product by ID</button>
    </div>
  );
};

export default ContentFilter;
