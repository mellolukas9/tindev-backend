const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: {
      type: String, //Tipo
      required: true // Se essa informação no caso o nome e obrigatória
    },
    user: {
      type: String,
      required: true
    },
    bio: String,
    avatar: {
      type: String,
      required: true
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ],
    dislikes: []
  },
  {
    timestamps: true
  }
);

module.exports = model("Dev", DevSchema);
