const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
  name: String,
  message: String,
  email: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
});

mongoose.model('forms', formSchema);
