import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState = {
  count: 0,
  text: '',
  toggle: false,
  items: [],
  user: {
    name: '',
    age: null,
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    // Handle count actions
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };

    // Handle text actions
    case 'changeText':
      return { ...state, text: action.payload };
    case 'clearText':
      return { ...state, text: '' };

    // Handle toggle actions
    case 'toggleSwitch':
      return { ...state, toggle: !state.toggle };

    // Handle items (array) actions
    case 'addItem':
      return { ...state, items: [...state.items, action.payload] };
    case 'clearItems':
      return { ...state, items: [] };

    // Handle user (object) actions
    case 'setUserName':
      return { ...state, user: { ...state.user, name: action.payload } };
    case 'setUserAge':
      return { ...state, user: { ...state.user, age: action.payload } };

    // Default case
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* Count Section */}
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      {/* Text Section */}
      <h2>Text: {state.text}</h2>
      <input
        type="text"
        value={state.text}
        onChange={(e) => dispatch({ type: 'changeText', payload: e.target.value })}
        placeholder="Enter text"
      />
      <button onClick={() => dispatch({ type: 'clearText' })}>Clear Text</button>

      {/* Toggle Section */}
      <h2>Toggle: {state.toggle ? 'On' : 'Off'}</h2>
      <button onClick={() => dispatch({ type: 'toggleSwitch' })}>
        {state.toggle ? 'Turn Off' : 'Turn On'}
      </button>

      {/* Items Section */}
      <h2>Items: {state.items.join(', ')}</h2>
      <input
        type="text"
        placeholder="Add item"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'addItem', payload: e.target.value });
            e.target.value = '';
          }
        }}
      />
      <button onClick={() => dispatch({ type: 'clearItems' })}>Clear Items</button>

      {/* User Section */}
      <h2>User:</h2>
      <p>Name: {state.user.name}</p>
      <p>Age: {state.user.age}</p>
      <input
        type="text"
        placeholder="Set Name"
        value={state.user.name}
        onChange={(e) => dispatch({ type: 'setUserName', payload: e.target.value })}
      />
      <input
        type="number"
        placeholder="Set Age"
        value={state.user.age || ''}
        onChange={(e) => dispatch({ type: 'setUserAge', payload: parseInt(e.target.value, 10) })}
      />
    </div>
  )
}

export default App
