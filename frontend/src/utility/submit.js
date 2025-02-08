import dayjs from "dayjs";

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

const f = new Intl.DateTimeFormat("en-au", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Australia/Sydney",
});

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

    for (let i = 7; i > 0; i--) {
      let date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);

      const newDate = f.format(date).split(" ");
      const finalDate = newDate[0] + "-" + newDate[1];
      processedData.push({
        date: finalDate,
        private: 0,
        group: 0,
        service: 0,
        competition: 0,
        casual: 0,
      });
    }

    const rawData = await result.json();

    rawData.data.forEach((data) => {
      const newDate = f.format(new Date(data.date)).split(" ");
      const finalDate = newDate[0] + "-" + newDate[1];
      let index = 0;
      while (true) {
        if (processedData[index].date === finalDate) {
          processedData[index][data.trainingType] += data.duration;
          break;
        } else {
          index += 1;
          if (index === processedData.length) {
            break;
          }
        }
      }
    });
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
};
