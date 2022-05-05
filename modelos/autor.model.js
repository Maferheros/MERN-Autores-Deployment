const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    // This is our only field
    nombre:{
        // datatype is String
        type: String,
        // required we use to signify this field is required. Second arg in [] is error message
        required: [true, "Must have a name entered!"],
        // rminLength we use to signify this field must be at least 3 chars long (first arg in []). Second arg in [] is error message
        minLength: [3, "Author name must be at least 3 characters long!"]
    }

}, {timestamps: true})


const Autor = mongoose.model ( 'autores' , AutorSchema );
module.exports = Autor;