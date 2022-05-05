const Autor = require ( '../modelos/autor.model');

const crearAutor = (request, response) => {
    const {nombre} = request.body;
    if (!nombre){
        response.statusMessage = "Para crear un nuevo autor es necesario enviar el nombre" 
        return response.status(406).end();
    }
    else {
        const nuevoAutor = {
            nombre
        };
        Autor.create(nuevoAutor)
            .then( autorNuevo => {
                return response.status(201).json (autorNuevo);
            })
            .catch ( err => {
                console.log(err);
                response.status (400).json (err);
            });
    }
}

const getAllAutores = (request, response) => {
    Autor.find().sort({nombre : 1})
        .then ( listaAutores => {
            return response.status(200).json(listaAutores);
        })
        .catch (err => {
            response.statusMessage = "Error al ejecutar el find"
            return response.status(400).end();
        });
}

const updateAutor = (request, response) => {
    Autor.findByIdAndUpdate ({_id: request.params.id}, request.body, {new:true, runValidators: true
    })
        .then (( datoAutor) => {
            return response.status(202).json(datoAutor);
        })
        .catch ( err => {
            console.log(err);
            response.status (400).json (err);
        }); 
}

const getOneAutor = (request, response) => {
    Autor.findOne({_id:request.params.id})
        .then ((autorEncontrado) => {
            return response.status(200).json(autorEncontrado);
        })
        .catch ( err => {
            response.statusMessage = "Hubo error al ejecturar el findOne " + id + err; 
            return response.status(400).end();
        });
}

const deleteAutor = (request, response) => {
    Autor.deleteOne ({_id: request.params.id})
    .then(() => {
        return response.status(204).end();
    })
    .catch ( err=> {
        response.statusMessage = "Hubo error al ejecturar el delete" + err; 
        return response.status(400).end();
    });
}

const Autorcontroller = {
    crearAutor,
    getAllAutores,
    deleteAutor,
    updateAutor,
    getOneAutor
};

module.exports = Autorcontroller;