import AppName from './components/AppName.jsx';
import AddTodo from './components/AddTodo.jsx';
import "./App.css";
import TodoItem from './components/TodoItem.jsx';
function App() {
  const todoItems = [
    { name: "Buy milk", date: "04/10/2023" },
    { name: "Go to College", date: "04/10/2023" }
  ];

  return ( <center className='to-do-container'>
    <AppName />
    <AddTodo />
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.date} />
      ))}
    </div>
    </center>
  );
}

export default App
