import './App.css';
import Autocomplete from './components/autocomplete/autocomplete';
import OtpInput from './components/otp-input/otp-input';
import VotingPoll from './components/voting-poll/voting-poll';
import fruits from './mocks/fruits.json';
import { useState } from 'react';

function App() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <div>
      <h1>LLD Problems</h1>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', justifyContent: 'center'}}>
        <button onClick={() => setActiveComponent('autocomplete')}>Autocomplete</button>
        <button onClick={() => setActiveComponent('voting-poll')}>Voting Poll</button>
        <button onClick={() => setActiveComponent('otp-input')}>Otp Input</button>
      </div>
      <div style={{ marginTop: 32 }}>
        {activeComponent === 'autocomplete' && <Autocomplete data={fruits} />}
        {activeComponent === 'voting-poll' && <VotingPoll />}
        {activeComponent === 'otp-input' && <OtpInput otpLength={4} />}
      </div>
    </div>
  );
}

export default App;
