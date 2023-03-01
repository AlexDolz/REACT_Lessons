// 1. Правило JSX: внутри разметки необходимо указать {} для того, что бы учесть JS ВЫРАЖЕНИЕ

// function App() {
//   const string = 'Tigran';
//   let a = 100;
// const name = `name ${10 == 10 ? 10 : 0}`;
// V interpoliaciji ne mozem ispolzovat cikl for, if else.. To cto ne vozvrasiajet

//   return (
//     <div className={a > 50 ? 'true' : 'false'}>
//       {`name ${string} ${10 == 10 ? 10 : 0}`}
//     </div>
//   );
// }

// export default App;

// 2. Правило: в любом месте можно перейти из JS в HTML и обратно
// для перехода из HTML в JS необходимо указать {}
// для перехода из JS в HTML ничего указывать не нужно

function App() {
  const a = 100;

  return (
    <div>
      <div>{a !== 100 ? <p>{a}</p> : <h1>Title</h1>}</div>
      <div>{true && <p>a = 100</p>}</div>{' '}
      {/* jesli tam false togda 2 uslovije ne udovletvoriajetsia*/}
    </div>
  );
}

export default App;
