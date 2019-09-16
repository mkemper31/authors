const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String, minlength: 3 },
}, {timestamps: true });
mongoose.model('Author', AuthorSchema);
