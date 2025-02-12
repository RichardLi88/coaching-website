import dotenv from "dotenv";
dotenv.config();

const youtubeKey = process.env.YT_API_KEY;
const data = {};

async function getYoutubeVideos(req) {
  const query = req.params.query;
  try {
    const results = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=relevance&q=${query}&relevanceLanguage=en&type=video&videoDefinition=high&videoDuration=medium&key=${youtubeKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (results.ok) {
      data.data = await results.json();
      data.time = new Date();
      return true;
    }
    console.log("Error:", results);
    return false;
  } catch (err) {
    console.log(err.message);
  }
}

async function returnYoutubeVideos(req, res) {
  if (data && new Date(data.time).getDate() === new Date().getDate()) {
    return res.status(200).json(data.data);
  } else {
    const result = await getYoutubeVideos(req);
    if (result) {
      return res.status(200).json(data.data);
    }
    return res.status(500).json({ success: false });
  }
}
export default returnYoutubeVideos;
