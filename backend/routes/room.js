const express = require('express');
const router = express.Router();
const Player = require('../db/models/Player');
const Match = require('../db/models/Match');

router.post('/player', async (req, res) => {
  try {
    const { playerName } = req.body;
    if (!playerName) return res.status(400).json({ error: 'playerName required' });
    await Player.findOneAndUpdate(
      { playerName },
      { lastPlayed: new Date() },
      { upsert: true, new: true }
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register player' });
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const top10 = await Player.find()
      .sort({ wins: -1, avgScore: -1 })
      .limit(10)
      .lean();
    res.json(top10);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

router.get('/match/:matchId', async (req, res) => {
  try {
    const match = await Match.findOne({ matchId: req.params.matchId }).lean();
    if (!match) return res.status(404).json({ error: 'Match not found' });

    const safeMatch = { ...match };
    if (safeMatch.question) {
      delete safeMatch.question.sampleSolution;
      delete safeMatch.question.expectedOutput;
    }

    res.json(safeMatch);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch match' });
  }
});

module.exports = router;
