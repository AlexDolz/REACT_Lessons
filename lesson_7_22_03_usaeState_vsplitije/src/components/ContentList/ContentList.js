import ContentItem from '../ContentItem/ContentItem';

const ContentList = props => {
  const { card } = props;

  return (
    <div>
      {card.map(elem => (
        <ContentItem name={elem.name} price={elem.price} />
      ))}
    </div>
  );
};

export default ContentList;
