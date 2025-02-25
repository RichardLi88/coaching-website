export const getYoutubeVideos = async (query) => {
  try {
    const result = await fetch(
      `https://webdev-2kdh.onrender.com/api/youtube/get/${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    return data.items;
  } catch (err) {
    console.log(err);
  }
};
