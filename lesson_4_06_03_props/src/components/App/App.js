import Block from '../Block/Block';
import Content from '../Content/Content';

// 1) Peredat parametr kak atribut vnutri komponenta
// 2) Polucit na storone vizivajemogo komponenta

// Задание 1
// Передайте в компонент block 3 проп (color), который будет регулировать цвет
// карточки (background-color)

// Задание 2
// Передайте в компонент block 4 проп (size), который будет регулировать размеры div-карточки
// Если указать размер:
// 'l', тогда размер должен быть W/H  100/80 px
// 'm', тогда размер должен быть W/H  150/100 px
// 'xl', тогда размер должен быть W/H  220/150 px

// Задание 3 (ДЗ)
// Передайте в компонент block 5 проп (isRead), который принимает булевый тип
// Если компонент block получит true - тогда необходимо помимо h2 и p, сформировать еще один p
// с текстовым сво-вом 'Read'
// Если компонент block получит false - нужно оставить только h2 и p

function App() {
  return (
    <div>
      {/* <Block
        title={'Title 1'}
        text={'Text 1'}
        color={'yellow'}
        size={'l'}
        isRead={false}
      />
      <Block
        title={'Title 2'}
        text={'Text 2'}
        color={'pink'}
        size={'m'}
        isRead={false}
      />
      <Block
        title={'Title 3'}
        text={'Text 3'}
        color={'green'}
        size={'xl'}
        isRead={true}
      /> */}
      {/* <Block
        title={'Title 3'}
        text={'Text 3'}
        color={'linear-gradient(to right, red, yellow'}
        size={'xl'}
      /> */}
      <Content color={'green'} discountPrice={1000} price={1500} />
      <Content color={'lightblue'} discountPrice={2000} price={2200} />
      <Content color={'yellow'} discountPrice={400} price={900} />
    </div>
  );
}

export default App;
