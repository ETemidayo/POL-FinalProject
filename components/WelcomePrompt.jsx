import React, { useState, useEffect } from 'react';


const WelcomePrompt = () => {
    const [showWelcomePrompt, setShowWelcomePrompt] = useState(false);

    useEffect(() => {
      // Simulate a delay of 1 second
      const delay = setTimeout(() => {
        setShowWelcomePrompt(true);
      }, 100);

      return () => clearTimeout(delay);
    }, []);

  return (

        <div>
        {showWelcomePrompt && (
          <div>
            <p>Terminal Monitoring System</p>
            <p>1 sec ago</p>
            <p>Agent Online!</p>
            <p>Agent Toluwaju Adeokan logged in</p>
            <p>1 more notifications</p>
          </div>
        )}
      </div>
  )
}

export default WelcomePrompt