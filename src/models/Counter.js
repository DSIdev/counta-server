// External Dependancies   
var IntegerSchema = new Schema({
  integerOnly: {
    type: Number,
    get: v => Math.round(v),
    set: v => Math.round(v),
    alias: 'i'
  }
});
var Number = mongoose.model('Number', numberSchema);

const counterSchema = {
  name: "counter",
  schema: {
    title: {
      type: String,
      required: true,
      immutable: true
    },
    value: {
      type: Number,
      required: true,
      min: 0,
      max: 999999
    },
    creator: {
      type: String,
      required: true
    },
    followers: [{
      type: String,
      required: true
    }],
    isActive: {
      type: Boolean,
      default: true
    }
  },
  options: {
    collection: "counters",
    timestamps: { createdAt: "created", updatedAt: "modified" },
  }
}

module.exports = counterSchema;
