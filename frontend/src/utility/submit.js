export const submitInquiry = async (data) => {
  try {
    const result = await fetch("http://localhost:5000/api/lessons/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const processedData = await result.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
};
