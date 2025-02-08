import Training from "../schemas/training.js";

export const validateTrainingLog = async (req, res, then) => {
  const data = req.body;
  if (
    !data.trainingType ||
    !data.duration ||
    !data.date ||
    !data.venue ||
    !data.desc
  ) {
    return res
      .status(400)
      .json({ success: false, data: "Please fill in all details" });
  }
  req.training = data;
  then();
};

export const createTrainingLog = async (req, res) => {
  const training = { ...req.training, userId: req.user.id };
  try {
    const newTraining = Training(training);
    await newTraining.save();
    return res.status(200).json({ success: true, data: newTraining });
  } catch (err) {
    return res.status(500).json({ success: false, data: err.message });
  }
};

const periods = ["week", "month"];
export const getTrainingChart = async (req, res) => {
  const period = req.params.period;
  const id = req.user.id;

  if (!periods.some((p) => p === period)) {
    return res
      .status(400)
      .json({ success: false, data: "invalid period parameter" });
  }

  try {
    const trainings = await Training.find({ userId: id }).sort({ date: 1 });
    const returnedData = trainings.map((t) => {
      return {
        trainingType: t.trainingType,
        duration: t.duration,
        date: t.date,
      };
    });

    return res.status(200).json({ success: true, data: returnedData });
  } catch (err) {
    res.status(500).json({ success: false, data: err.message });
    console.log(err.message);
  }
};
