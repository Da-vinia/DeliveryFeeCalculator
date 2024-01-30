import React, { useState }from 'react';
import WelcomePage from './pages/WelcomePage';
import DeliveryFeeCalculator from './pages/DeliveryFeeCalculator';
import './styles/App.css';

const App: React.FC = () =>  {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleWelcomeComplete = () => {
    setShowCalculator(true);
  };

  return (
    <div className="App">
      {showCalculator ? (
         <DeliveryFeeCalculator />
      ) : (
        <WelcomePage onWelcomeComplete={handleWelcomeComplete} />
      )}  
    </div>
  );
};

export default App;
