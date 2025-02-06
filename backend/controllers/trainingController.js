import Training from "../schemas/training.js";

export const validateTrainingLog = async (req, res, then) => {
  const data = req.body;
  if (
    !data.id ||
    !data.trainingType ||
    !data.duration ||
    !data.date ||
    !data.venue
  ) {
    return res
      .status(400)
      .json({ success: false, data: "Please fill in all details" });
  }
  req.training = data;
  then();
};

export const createTrainingLog = async (req, res) => {
  try {
    const newTraining = Training(req.training);
    await newTraining.save();
    return res.status(200).json({ success: true, data: newTraining });
  } catch (err) {
    return res.status(500).json({ success: false, data: err.message });
  }
};

/*export const getTrainingHistory = async(req,res) => {

}*/
