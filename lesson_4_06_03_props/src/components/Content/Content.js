import './Content.css';

// 1) Внутри компонента Content cформировать div элемент с 3 дочерними тегами.
// div (150/100px) с любым цветом
// p (цена товара cо скидкой)
// p (процент скидки) (округлить до целого числа)

// Пропсы:
// 1) Цвет картинки
// 2) Цена со скидкой
// 3) Цена без скидки

function Content(props) {
  const { color, discountPrice, price } = props;
  const sales = Math.round(Math.abs(100 * (discountPrice / price - 1)));
  return (
    <div className='item'>
      <div className='image' style={{ background: color }}>
        <p>{discountPrice}</p>
        <p>{price}</p>
        <p>{`${sales} %`}</p>
      </div>
    </div>
  );
}

export default Content;
