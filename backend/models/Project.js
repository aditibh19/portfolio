import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  tech:        [String],
  repoUrl:     String,
  liveUrl:     String,
  image:       String,
  order:       { type: Number, default: 0 },
});

export default mongoose.model('Project', projectSchema);