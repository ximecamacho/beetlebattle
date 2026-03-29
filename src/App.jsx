//The App file is the
// switch between pages
// It's THE HOME PAGE! <3 <3 <3
// It has strings attached to the baby pages
// aka, battlescreen.jsx, startmenu.jsx, and Results.jsx

import React, { useState, useEffect } from 'react'; //imports React library for building user interfaces
import './index.css'; //links to the css file for styling
import { io } from 'socket.io-client';

// This is the functional component
function App() {
  const [screen, setScreen] = useState('home');
  const [difficulty, setDifficulty] = useState(null);
  const [language, setLanguage] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [status, setStatus] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch real leaderboard from MongoDB on load
  useEffect(() => {
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then(data => setLeaderboard(data))
      .catch(() => {});
  }, []);

  // Function to switch to the battle screen
  async function startBattle() {
    if (!difficulty || !language || !playerName.trim()) {
      setStatus('Pick a difficulty, language, and enter your name!');
      return;
    }

    // Register player in the database
    await fetch('/api/player', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerName: playerName.trim() })
    });

    // Connect socket and find match
    const socket = io({ path: '/socket.io' });
    socket.on('connect', () => {
      socket.emit('find_match', { playerName: playerName.trim(), language, difficulty });
    });

    setScreen('battle');
  }

  // --- HOME SCREEN --------------------------
  if (screen === 'home') {
    return (
      <div id="app">
        {/*the beautiful start menu <3 */}
        <div className="logo-container">
          <h1 className="title-main">BEETLE-BATTLE</h1>
          <h1 className="title-reflection">BEETLE-BATTLE</h1>
        </div>

        {/*the leaderboard */}
        <div className="leaderboard-container">
          <h2 className="leaderboard-title">LeaderBoard</h2>
          <div className="scroll-box">
            {leaderboard.length === 0 ? (
              <p>No players yet!</p>
            ) : (
              leaderboard.map((player, i) => (
                <p key={player._id}>{i + 1}. {player.playerName} - {player.wins} wins</p>
              ))
            )}
          </div>
        </div>

        {/*the difficulty buttons */}
        <div className="difficulty-container">
          <h2 className="difficulty-title">Difficulty</h2>
          <button className={`mushroom-button easy${difficulty === 'easy' ? ' selected' : ''}`} onClick={() => setDifficulty('easy')}>Easy</button>
          <button className={`mushroom-button medium${difficulty === 'medium' ? ' selected' : ''}`} onClick={() => setDifficulty('medium')}>Medium</button>
          <button className={`mushroom-button hard${difficulty === 'hard' ? ' selected' : ''}`} onClick={() => setDifficulty('hard')}>Hard</button>
        </div>

        {/*the language buttons */}
        <div className="language-container">
          <h2 className="difficulty-title">Language</h2>
          <button className={`mushroom-button easy${language === 'Python' ? ' selected' : ''}`} onClick={() => setLanguage('Python')}>Python</button>
          <button className={`mushroom-button medium${language === 'JavaScript' ? ' selected' : ''}`} onClick={() => setLanguage('JavaScript')}>JS</button>
          <button className={`mushroom-button hard${language === 'Java' ? ' selected' : ''}`} onClick={() => setLanguage('Java')}>Java</button>
        </div>

        {/*name input */}
        <div className="name-container">
          <input
            className="name-input"
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
          />
          {status && <p className="status-text">{status}</p>}
        </div>

        {/* Merged the Ladybug SVG with the Start Function */}
        <div className="play-section">
          <button className="ladybug-btn" onClick={startBattle}>
            <svg width="150" height="120" viewBox="0 0 150 120">
              {/*center x, center y, radius x, radius y.
              The horizontal pin, vertical pin,
              shape goes left, and right,
              up and down */}
              <ellipse cx="75" cy="70" rx="60" ry="45" fill="#C94021" />
              <circle cx="120" cy="70" r="25" fill="black" />
              {/*d=attributes list of commands for
              pen, M-moveto, Q-uadratic curve, 140, 30
              are control points, 150, 40 end points*/}
              <path d="M 130 50 Q 140 30 150 40" stroke="black" fill="none" strokeWidth="2" />
              <path d="M 135 55 Q 145 35 155 45" stroke="black" fill="none" strokeWidth="2" />
              <circle cx="80" cy="45" r="5" fill="black" />
              <circle cx="60" cy="85" r="5" fill="black" />
              <circle cx="90" cy="80" r="5" fill="black" />
            </svg>
            <span className="play-text">PLAY</span>
          </button>
        </div>
      </div>
    ); // CLOSED: The home return
  }

  // --- BATTLE ARENA SCREEN --------------------
  if (screen === 'battle') {
    return (
      <div id="app" className="battle-arena">

        {/* Title container */}
        <div className="title-lady-bug-container">
          {/* Title for competitor */}
          <h1 className="lady-bug-style">Asian Lady Beetle</h1>
        </div>

        {/* Your Two Beetles (Vectors) */}
        <div className="div-vectors">
          <svg width="300" height="300" viewBox="0 0 1050 1095" fill="none">
            <path d="M1050 405.182C1050 134.568 758.555 -158.717 525 100.421C322.386 -128.606 0 134.568 0 405.182C0 675.796 309.411 899.532 525 1095C747.576 901.559 1050 675.796 1050 405.182Z" fill="#526022"/>
          </svg>

          <svg width="300" height="300" viewBox="0 0 1050 1095" fill="none">
            <path d="M1050 405.182C1050 134.568 758.555 -158.717 525 100.421C322.386 -128.606 0 134.568 0 405.182C0 675.796 309.411 899.532 525 1095C747.576 901.559 1050 675.796 1050 405.182Z" fill="#526022"/>
          </svg>
        </div>

        {/* Back Button so you don't get stuck */}
        <button className="back-btn" onClick={() => setScreen('home')}>
          Back to Menu
        </button>
      </div>
    );
  }
}

export default App;
