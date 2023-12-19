const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: {type:String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});


// virtuals are properties in mongoose that are not stored in database and cannot direclty used inside queries
// Virtual for author's full name
// name -virtual property used to create a fullname
// as virtual are not stored in db and as that cannot use them in queries
AuthorSchema.virtual("name").get(function(){
    // to avoid errors in cases where an author does not have either a family name or first name
    let fullname = "";
    if(this.first_name && this.family_name){
        fullname = `${this.family_name}, ${this.first_name}`;
    }

    return fullname;
})


// virtual for author's URL
AuthorSchema.virtual("url").get(function(){
    return `catalog/author/${this.id}`;
})

// virtual for author's date of birth formatted
AuthorSchema.virtual("lifespan").get(function(){
    return `${this.date_of_birth_formatted} - ${this.date_of_death_formatted}`;
})

// export model
module.exports = mongoose.model("Author", AuthorSchema)

// Author - name of the model
// model is a constructor compiled from Schema definitions
// model instance = document