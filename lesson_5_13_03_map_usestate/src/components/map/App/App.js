import Block from '../Block/Block';

function App() {
  // let data = ['Title 1', 'Title 2', 'Title 3', 'Title 3'];
  // Metod map pozvoliajet ciklicno projtis po massivu i vernut massiv iz komponentov, kotorije raspakujutsia drug za drugom
  // Atribut key javliajetsia vaznim atributom, kotorij dolzen ssilatsia na pervicnij kliuc (unikalnij) i dolzen peredavat unikalnoje znacenije sredi vseh elementov massiva
  //   return (
  //     <div>
  //       {data.map(elem => (
  //         <Block key={elem} title={elem} />
  //       ))}
  //     </div>
  //   );

  let data = [
    {
      id: 1,
      title: 'Title 1',
      text: 'Text 1',
    },
    {
      id: 2,
      title: 'Title 2',
      text: 'Text 2',
    },
    {
      id: 3,
      title: 'Title 3',
      text: 'Text 3',
    },
    {
      id: 4,
      title: 'Title 4',
      text: 'Text 4',
    },
  ];
  // Доп. задание
  // Не изменяя массив, передайте новый проп id, который будет передавать начиная с 1 порядковый номер компонента
  // Внутри компонента перед title укажите новый тег <p> с текстовым сво-вом этого порядка

  return (
    <div>
      {/* {data.map(elem => (
        <Block key={elem.id} title={elem.title} text={elem.text} />
      ))} */}
      {data.map(elem => (
        <Block key={elem.id} {...elem} id={elem.id} />
      ))}
    </div>
  );
}

export default App;
