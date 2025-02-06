import { send_mail } from "../utility/email.js";

export const submitInquiry = async (req, res) => {
  const data = req.body;
  try {
    const result = await send_mail(data.recipient, data.subject, data.html);
    if (result.success) {
      return res.status(200).json({ success: result.success });
    }
  } catch (err) {
    return res.status(500).json({ success: false, data: err.message });
  }
};
