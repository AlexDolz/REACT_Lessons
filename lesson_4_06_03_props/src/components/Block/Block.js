import './Block.css';

// Zadaca argumenta props - skolekcionirovat vse peredavajemije propi v odin objekt, formiruja pari kliuc - znacenije

function Block(props) {
  // const title = props.title;
  // const text = props.text;
  const { title, text, color, size, isRead } = props;
  return (
    <div className={`block_item ${size}`} style={{ background: color }}>
      <h2>{title}</h2>
      <p>{text}</p>
      {isRead && <p>Read</p>}
    </div>
  );
}
// Для каждого выводимого компонента Block сформировать новый проп, который будет ссылаться на текст поста

export default Block;
