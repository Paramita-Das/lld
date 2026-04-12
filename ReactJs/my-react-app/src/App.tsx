import './App.css';
import Autocomplete from './components/autocomplete';
import fruits from './mocks/fruits.json';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
      <h1>Fruit Autocomplete</h1>
      <Autocomplete data={fruits} />
    </div>
  );
}

export default App;
