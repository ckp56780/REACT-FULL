import './App.css';

import Heading from './components/Heading';
import ClockSlogan from './components/ClockSlogan';
import ClockTime from './components/ClockTime';

function App() {
  return (
    <center className="app-container">
      <Heading />
      <ClockSlogan />
      <ClockTime />
    </center>
  );
}

export default App;