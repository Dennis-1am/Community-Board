import './App.css';
import Roof from './assets/Roof-removebg-preview (1).png';
import EventList from './components/eventList';

function App() {
  return (
    <div>
      <div className='Banner'>
        <img src={Roof} alt="Roof"/>
        <h1>Chinatown Association</h1>
      </div>
      <EventList title="Hello"/>
    </div>
  )
}

export default App
