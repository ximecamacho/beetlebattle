//The App file is the 
// switch between pages
// It's THE HOME PAGE! <3 <3 <3 
// It has strings attached to the baby pages
// aka, battlescreen.jsx, startmenu.jsx, and Results.jsx

import React from 'react'; //imports React library for building user interfaces
import './index.css'; //links to the css file for styling

// This is the functional component
function App() {
  return (
    <div id="app"> 
   
      <div className="logo-container">
        <h1 className="title-main">BEETLE-BATTLE</h1>
        <h1 className="title-reflection">BEETLE-BATTLE</h1>
      </div>


      <div className="leaderboard-container">
        <h2 className="leaderboard-title">LeaderBoard</h2>

        <div className="scroll-box">
          <p>1. BeetleKing - 500</p>
          <p>2. LadyBugQueen - 450</p>
          <p>3. ImposterMaster - 400</p>
          <p>4. BugBoss - 350</p>
          <p>5. InsectChampion - 300</p>
        </div>
      </div>

      <div className="difficulty-container">
        <h2 className="difficulty-title">Difficulty</h2>

        <button className="mushroom-button easy">Easy</button>
        <button className="mushroom-button medium">Medium</button>
        <button className="mushroom-button hard">Hard</button>

      </div>


      <div className="play-section">
        <button className="ladybug-btn">
          <svg width="150" height="120" viewBox="0 0 150 120">
            <ellipse cx="75" cy="70" rx="60" ry="45" fill="#C94021" />
            
            <circle cx="120" cy="70" r="25" fill="black" />
            
            <path d="M 130 50 Q 140 30 150 40" stroke="black" fill="none" strokeWidth="2" />
            <path d="M 135 55 Q 145 35 155 45" stroke="black" fill="none" strokeWidth="2" />

            {/*<circle cx="50" cy="55" r="5" fill="black" />*/}
            <circle cx="80" cy="45" r="5" fill="black" />
            <circle cx="60" cy="85" r="5" fill="black" />
            <circle cx="90" cy="80" r="5" fill="black" />
          </svg>
          
      
          <span className="play-text">PLAY</span>
        </button>
      </div>

      

    </div>
  );
}

export default App;