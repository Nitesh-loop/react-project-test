import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {
  // Define the animation properties
  const props = useSpring({
    loop: true, // Make the animation loop indefinitely
    from: { opacity: 0 }, // Set the initial opacity
    to: { opacity: 1 }, // Set the final opacity
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* Apply the animated styles to the text */}
        <animated.div style={props}>Hello, React Animation!</animated.div>
      </header>
    </div>
  );
}

export default App;
