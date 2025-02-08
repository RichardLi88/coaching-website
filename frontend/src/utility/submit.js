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

export const submitTrainingLog = async (data) => {
  try {
    const result = await fetch(`http://localhost:5000/api/training/create`, {
      method: "POST",
      credentials: "include",
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

export const getData = async () => {
  try {
    const result = await fetch(
      `http://localhost:5000/api/training/fetch/week`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let processedData = [];

    const rawData = await result.json();
    console.log(rawData);

    rawData.forEach((data) => {
      if (processedData.at(-1) && processedData.at(-1).date === data.date) {
        processedData.at(-1)[data.trainingType] += data.duration;
      } else {
        processedData.push({
          date: data.date,
          private: 0,
          group: 0,
          service: 0,
          competition: 0,
          casual: 0,
        });
        processedData.at(-1)[data.trainingType] += data.duration;
      }
    });

    return processedData;
  } catch (err) {
    console.log(err.message);
  }
};
