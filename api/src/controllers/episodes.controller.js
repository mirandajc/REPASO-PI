const { getEpisodesByApi } = require('../services/episodes.service')

const getEpisodes = async function(req, res, next) {
    
   try{
       const episode  = await getEpisodesByApi()
        res.status(200, {message: 'Se agregaron los episodios correctamente'}).send(episode)
    } catch(e) {
        console.log(e)
    }
}

module.exports = {
    getEpisodes
}