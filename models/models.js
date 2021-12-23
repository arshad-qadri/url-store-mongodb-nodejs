module.exports = mongoose => {
  const projectUrl = mongoose.model(
    "projectUrl",
    mongoose.Schema({ title: String, url: String }, { timestamps: true })
  );
  return projectUrl;
};
