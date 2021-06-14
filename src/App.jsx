// import { HelloWorld } from './components/HelloWorld';
// import Counter from './components/Counter';
// import Message from './components/Message';
// import List from './components/List';
// import FirstControlledForm from './components/FirstControlledForm';
// import SecondControlledForm from './components/SecondControlledForm';
import Lifecycle from './components/LifecycleParent';

// const arrayOfObjects = [
//   { id: 1, title: '1' },
//   { id: 2, title: '2' },
//   { id: 3, title: '3' },
//   { id: 4, title: '4' },
//   { id: 5, title: '5' },
// ];

function App() {
  return (
    <div className="App">
      {/* <HelloWorld name='Maksim'/> */}
      {/* <Counter shouldShowTitle/> */}
      {/* <Message /> */}
      {/* <List arr={arrayOfObjects}/> */}
      {/* <FirstControlledForm /> */}
      {/* <SecondControlledForm /> */}
      <Lifecycle/>
    </div>
  );
}

export default App;
