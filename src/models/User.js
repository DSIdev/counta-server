// External Dependancies   

const userSchema = {
  name: "User",
  schema: {
    contactName: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20
    },
    username: {
      type: String,
      required: true,
      immutable: true
    },
    encpwd: {
      type: String,
      required: true,
      minlength: 20
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      maxlength: 40
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  options: {
    collection: "users",
    timestamps: { createdAt: "created", updatedAt: "modified" },
  }
}

module.exports = userSchema;
