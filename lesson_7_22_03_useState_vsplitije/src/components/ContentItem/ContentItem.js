const ContentItem = props => {
  const { name, price, check, isSale } = props;
  const cardStyle = {
    margin: 25,
    border: '1px solid black',
    width: 250,
    textAlign: 'center',
  };
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p style={{ color: isSale ? 'red' : 'black' }}>{price}</p>
      {check && <p>Checked</p>}
    </div>
  );
};

export default ContentItem;
