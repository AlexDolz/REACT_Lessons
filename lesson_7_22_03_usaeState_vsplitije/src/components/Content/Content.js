import ContentFilter from '../ContentFilter/ContentFilter';
import ContentList from '../ContentList/ContentList';
import { useState } from 'react';

const Content = () => {
  const data = [
    { id: 1, name: 'Iphone X', price: 1000, check: true },
    { id: 2, name: 'Sumsung S21', price: 250, check: false },
    { id: 3, name: 'Monopod', price: 350, check: true },
    { id: 4, name: 'Samokat', price: 1600, check: false },
    { id: 5, name: 'Xiami ReadMe', price: 10000, check: false },
  ];

  let [card, setCards] = useState(data);

  // 1 задание
  // В компоненте ContentFilter создайте кнопку, которая будет вызывать модальное окно, которое будет
  // ссылаться на id элемента массива, который необходимо будет удалить

  const deleteCardById = () => {
    let promptResult = +prompt('Enter ID of removing element');
    let newCards = card.filter(elem => elem.id != promptResult);

    setCards(newCards);
  };

  // (если не успеем - домашка)
  // 2 задание
  // В компоненте ContentFilter создайте кнопку, которая будет вызывать модальное окно, которая будет
  // ссылаться на id элемента массива. Функция должна изменить сво-во check с true на false (или с false на true)
  // Компонент ContentItem должен получить также проп check, который взависиомсти от булевого типа
  // должен сформировать (в конце div) тег <p></p> с значением 'Просмотрен'.
  // Если значение пропа check будет false - этот тег появится не должен

  return (
    <div>
      <ContentFilter deleteCardById={deleteCardById} />
      <ContentList card={card} />
    </div>
  );
};

export default Content;
