const { Router } = require("express");
const { getCharacters } = require('../controllers/characters.controller')
const { getEpisodes } = require('../controllers/episodes.controller')
const { createCharacter } = require('../controllers/character.controller')

const router = Router();

// Configurar los routers

router.get('/characters', getCharacters)
router.get('/episodes', getEpisodes)
router.post('/character', createCharacter)

module.exports = router;
