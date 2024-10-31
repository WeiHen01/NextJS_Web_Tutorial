// models/Item.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);