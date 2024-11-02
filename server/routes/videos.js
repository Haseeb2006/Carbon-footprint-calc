const express = require('express');
const multer = require('multer');
const path = require('path');
const Video = require('../models/Video');
const auth = require('../middleware/auth');
const { generateSummary, generateQuiz, generateNotes } = require('../services/aiService');

const router = express.Router();

// Set up multer for video upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Upload video
router.post('/upload', auth, upload.single('video'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const videoPath = req.file.path;

    const video = new Video({
      title,
      description,
      path: videoPath,
      user: req.user.id,
    });

    await video.save();

    // Generate AI content
    const summary = await generateSummary(videoPath);
    const quiz = await generateQuiz(videoPath);
    const notes = await generateNotes(videoPath);

    video.summary = summary;
    video.quiz = quiz;
    video.notes = notes;

    await video.save();

    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's videos
router.get('/', auth, async (req, res) => {
  try {
    const videos = await Video.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get video by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    if (video.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;