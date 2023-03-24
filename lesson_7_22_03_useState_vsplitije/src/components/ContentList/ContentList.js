import ContentItem from '../ContentItem/ContentItem';

const ContentList = props => {
  const { card } = props;

  return (
    <div>
      {card.map(elem => (
        <ContentItem
          key={elem.id}
          name={elem.name}
          price={elem.price}
          check={elem.check}
          isSale={elem.isSale}
        />
      ))}
    </div>
  );
};

export default ContentList;
