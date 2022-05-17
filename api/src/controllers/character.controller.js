const getCharaterById = function(){
    const getId = {
        name :'algo'
    }
    res.send( getId )
}

const createCharacter = function (req, res, next) {
    const create = {
        name :'algo'
    }
    res.send( create )
}


module.exports ={
    createCharacter,
    getCharaterById
}