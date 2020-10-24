import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  message: { type: String, required: true },
  name: { type: String, required: true, unique: true, lowercase: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  received: { type: Boolean, default: false },
});

export default model('Message', MessageSchema);
