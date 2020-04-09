module.exports = {
  mongoURI:
    process.env.MONGODB_URI ||
    "mongodb+srv://dbacall:Marzipan17@moviebucketlist-hzwtr.mongodb.net/test?retryWrites=true&w=majority",
  secretOrKey: process.env.SECRET || "secret",
};
