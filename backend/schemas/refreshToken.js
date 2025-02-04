import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const RefreshToken = mongoose.model(
  "RefreshToken",
  refreshTokenSchema,
  "refreshTokens"
);

export default RefreshToken;
