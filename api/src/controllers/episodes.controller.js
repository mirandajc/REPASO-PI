const getEpisodes = function(req, res, next) {
    
   const episode  = {
        episodio: 1,
    }
    
    res.send(episode)
}

module.exports = {
    getEpisodes
}