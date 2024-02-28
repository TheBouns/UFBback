const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ActuaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
    },
    provincia: {
      type: Number,
    },
    zona: {
      type: Number,
    },
    subzona: {
      type: Number,
    },

    unidadIds: [{ type: ObjectId, ref: "Unidad" }],
    userIds: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Actua = mongoose.model("Actua", ActuaSchema);

module.exports = Actua;
