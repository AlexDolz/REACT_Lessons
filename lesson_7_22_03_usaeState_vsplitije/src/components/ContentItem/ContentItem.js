const ContentItem = props => {
  const { name, price } = props;
  const cardStyle = {
    margin: 25,
    border: '1px solid black',
    width: 250,
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ContentItem;
