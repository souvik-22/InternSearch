const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyLocation: {
    type: String,
    required: true,
  },
  ctc: {
    type: String,
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  lastDate: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Job = new mongoose.model("job", jobSchema);
module.exports = Job;
