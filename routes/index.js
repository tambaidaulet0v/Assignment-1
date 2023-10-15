const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/services', (req, res) => {
    res.render('services');
});

router.get('/projects', (req, res) => {
    res.render('projects'); // Render the projects.ejs template
});

module.exports = router;
