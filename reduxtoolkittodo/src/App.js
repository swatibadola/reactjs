// Redux(a core library) and react redux(implementation of redux) are diff.
// Redux toolkit makes things work automatically
// 1) Make store - Every application has a single store which is called single source of truth
// 2) Make slice in features - Need 3 things majorly, name, initialState, and list of reducers. Reducers are objects.
// 3) Make components - using dispatch. Tos select values use Selector

import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';


function App() {
  return (
    <Provider store={store}>
      <h1> Learning about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
