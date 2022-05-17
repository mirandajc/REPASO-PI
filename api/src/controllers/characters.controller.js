const getCharacters = function (req ,res ,next) {
        const character = {
        character: 'algo'
    }
    res.send(character)
}

module.exports ={
    getCharacters
}