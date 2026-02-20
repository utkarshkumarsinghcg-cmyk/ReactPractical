import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => setValue(prev => prev + 1);
  const handleDecrement = () => setValue(prev => (prev > 0 ? prev - 1 : 0));
  const handleReset = () => setValue(0);

  return (
    <div className="container counter-container">
      <h2>Counter</h2>
      <div 
        className="counter-value" 
        style={{ color: value === 0 ? 'var(--danger-color)' : 'var(--success-color)' }}
      >
        {value}
      </div>
      <div className="button-group">
        <button onClick={handleIncrement} className="btn primary-btn">Increment</button>
        <button onClick={handleDecrement} className="btn secondary-btn" disabled={value === 0}>Decrement</button>
        <button onClick={handleReset} className="btn danger-btn">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
