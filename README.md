# ˚₊‧ʚ🐞ɞ‧₊˚ Beetle Battle ˚₊‧ʚ🐞ɞ‧₊˚

> *"Like a lady-bug, their spots are unique. Similarly, every individual has a programming signature that's waiting to be shined upon."* — Samantha

**Code. Compete. Create.**

Your opponent is the Asian Lady Beetle (an imposter) — you must defeat them by honing your own beauty.

An educational syntax game that teaches you how to code by making you compete with your friends and family, or even a bot *(in case you're lonely)*.

---

## About The Project

With the exponential growth of AI, computer science has never been more accessible than now *(so it seems)*.

However, using AI is only filtering out "turned on" and "turned off" brains. So, to stop this issue from widening, we have created **"Beat"le Battle** — a competitive syntax trainer.

Beetle Battle helps students learn and memorize coding syntax without an AI crutch by giving them a prompt and requiring them to write the code while racing against time and a player.

Writing code is aimed to force users to take the time to process the prompt, think about syntax, and attack.

This game cultivates a fierce environment for any developer to mature into a confident programmer.

---

## What This Project Includes

- **Backend** built in JavaScript with **MongoDB** to store players' stats
- **Gemini API** to generate unique questions for various programming languages and parse users' code to assign a proper score
- **Frontend** built with React translating Figma designs into working code: CSS, HTML, JSX
- **Node.js + Express** bridging the frontend and backend to interact with the database and parser

---

## How To Play

1. Choose your programming language and difficulty
2. Get matched with an opponent (or face the Bot)
3. The game starts
4. Both players receive the same prompt
5. Write your code and hit Submit
6. The game judges your code, assigns a score, and gives feedback
7. After the match, both players get personalized notes and a winner is chosen

Built during **AthenaHacks 2026** — this project transforms the dry experience of algorithm practice into a competitive, fast-paced environment.

---

## ✨ Key Features

**Custom SVG UI**
Everything was made using shapes in HTML, inspired through Figma. The Ladybug "Play" button, "Leaf" battle arenas, and mushroom difficulty buttons are all built entirely from scalable, code-driven SVG shapes.

**Gemini AI Integration**
Utilizes Google's Gemini API to evaluate code quality, generate difficulty-appropriate prompts, and provide real-time snarky feedback to help you defeat your opponent and move forward.

**Multiplayer Matchmaking**
Real-time synchronization using Socket.io to find opponents of similar skill levels.

**Live Leaderboard**
A scrolling, persistent ranking system powered by MongoDB to track the top-tier "Beetle Kings."

**Multi-Language Support**
Practice in Python, JavaScript, or Java with tailored logic prompts.

---

## 📸 Visuals

| Home Menu | Battle Arena | Results |
|-----------|-------------|---------|
| Customize difficulty, language, and name | Real-time code input on interactive leaf vectors | Personalized feedback and winner announcement |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- MongoDB (local or Atlas)
- Google Gemini API key

### Installation

```bash
git clone https://github.com/ximecamacho/beetlebattle.git
cd athenahacks2026

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install && cd ..
```

### Environment Setup

Create a `backend/.env` file and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_key
```

### Run the Application

```bash
# Terminal 1 — backend
cd backend
npm run dev

# Terminal 2 — frontend
npm start
```

The app will be running at `http://localhost:5173`.

---

## 🎮 Usage Instructions

**Identity** — Enter your "Fighter Name" in the input field.

**Strategy** — Select your preferred coding language and difficulty level (Mushroom buttons).

**Deploy** — Click the Ladybug Play Button to enter the matchmaking queue.

**Battle** — Once in the arena, read the Code Prompt at the top. Type your solution into the right-hand leaf and click RUN to strike your opponent!

---

## 🛠️ Built With

Figma, VSCode, React, Node.js, Express, Socket.io, MongoDB, Google Gemini API, CSS, JavaScript

---

## 👾 Team — The Bug Hunters

| Name | Role |
|------|------|
| Samantha Reap | Full-Stack Lead & UI/UX Designer |
| Khushi Patel | Developer |
| Allyson Le | Developer |
| Ximena Camacho | Developer |


---

## 🗺️ Future Roadmap

- Various language compilers
- More game modes
- Sneaky attacks like banana peels to throw at your opponent
