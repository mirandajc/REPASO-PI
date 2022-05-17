const axios = require('axios');
const { Episode } = require('../db');

const getEpisodesByApi = async function() {
    try {
        const api = await (axios.get('https://rickandmortyapi.com/api/episode'));
        const episodes = api.data?.results.map(async episode=> {
            await Episode.findOrCreate({
                where:{
                    name : episode.name
                },
                row:false
            })
            Promise.all(episodes)
            return episodes
        });
    } catch(e) {
        console.log(e)
    }
    
}

module.exports = {
    getEpisodesByApi
}