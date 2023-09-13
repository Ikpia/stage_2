const Person = require('../models/person');

const addPerson = async (req, res) => {
    try {
        const {name} = req.body;
        console.log(name)
        const person = await new Person({
        name: name
    });
    person.save().then((result) => res.json({
        message :"person added successfully!",
        status : result
    })).catch((err)=> console.log(err))

    } catch (err) {
        console.log(err);
        res.json({
            message: "Error adding this person to the database",
            status: err
        })
    } 
}

const getPerson = async (req, res) => {
    try {
        const id = req.params.user_id;
        console.log(id)
        const theperson = await Person.findOne({_id: id});
        console.log(theperson)
        res.send(theperson)
    } catch (err) {
        res.send(err)
    }
}

const updatePerson = async (req, res) => {
    try {
        const id = req.params.user_id;
        const name = req.body;
        await Person.findOneAndUpdate(
            { _id: id },
            name, // update with this data
            { new: true }).then((result) => res.json({
                message :"person updated successfully!",
                status : result
            })).catch((err)=> console.log(err))
    } catch (err) {
        res.json({
            message: "Error updating this person",
            status: err
        })
    }
}

const deletPerson = async (req, res) => {
    try {
        const id = req.params.user_id
        await Person.deleteOne({
            _id: id
        });
        res.send(`person with id ${id} is now deleted`)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    addPerson,
    updatePerson,
    getPerson,
    deletPerson
}

