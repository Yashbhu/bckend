import asyncHandler from "../utils/asyncHandler.js"; // ✅ make sure it's default export

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export { registerUser };
