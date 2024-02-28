const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UnidadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    provincia: {
      type: Number,
      required: true,
    },
    zona: {
      type: Number,
      required: true,
    },
    subzona: {
      type: Number,
    },
    codigo: {
      type: String,
    },

    turno: {
      type: String,
      required: true,
    },
    actuando: {
      type: Boolean,
      default: false,
    },

    userIds: [{ type: ObjectId, ref: "User" }],
    actuaIds: [{ type: ObjectId, ref: "Actua" }],
  },
  { timestamps: true }
);

const unidad = mongoose.model("u", UnidadSchema);

module.exports = unidad;