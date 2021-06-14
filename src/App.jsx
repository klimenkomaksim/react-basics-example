/* eslint-disable no-unused-vars */
import { HelloWorld } from './components/HelloWorld';
import Message from './components/Message';
import Counter from './components/Counter';
import List from './components/List';
import UncontrolledForm from './components/UncontrolledForm';
import FirstControlledForm from './components/FirstControlledForm';
import SecondControlledForm from './components/SecondControlledForm';
import Lifecycle from './components/LifecycleParent';

const arrayOfObjects = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
  { id: 5, title: '5' },
];

/*
  HelloWorld — Functional and Class Components examples
  Message — state example
  Counter — state & conditional render examples
  List — keys example
  UncontrolledForm — uncontrolled Component examples
  FirstControlledForm & SecondControlledForm — controlled Component examples
  Lifecycle — lifecycle methods examples
*/
function App () {
  return (
    <div className="App">
      <HelloWorld name='Maksim'/>
      <Message />
      <Counter shouldUseStateless/>
      <List arr={arrayOfObjects}/>
      <UncontrolledForm />
      <FirstControlledForm />
      <SecondControlledForm />
      <Lifecycle/>
    </div>
  );
}

export default App;
