import { useState } from 'react';
import Form from './Form';

import './App.css';

const App = () => {
  const [prediction, setPrediction] = useState('');

  return (
    <div className="app-container">
      
      <div className="form-container">
        <Form setPrediction={setPrediction} />
        {prediction && <div className="prediction">{prediction}</div>}
      </div>
    </div>
  );
};

export default App;
