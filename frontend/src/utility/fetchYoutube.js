export const getYoutubeVideos = async (query) => {
  try {
    const result = await fetch(
      `http://localhost:5000/api/youtube/get/${query}`,
      {
        method: "GET",
        credentials: "include",
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
