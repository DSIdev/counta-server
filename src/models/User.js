// External Dependancies   

const userSchema = {
  name: "User",
  schema: {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      minlength: 6,
      maxlength: 20
    },
    username: {
      type: String,
      required: [true, "User Name is required"],
      immutable: true
    },
    encpwd: {
      type: String,
      required: true,
      default: Date.now(),
      minlength: 8
    },
    email: {
      type: String,
      lowercase: [true, "email address is required"],
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
