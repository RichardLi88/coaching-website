export async function getLessons() {
  try {
    const result = await fetch(
      "http://localhost:5000/api/lessons/fetch",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!result.ok) {
      console.log("error");
      return "Error: failed to get products";
    }
    const data = await result.json();

    return data.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateClicked(id) {
  try {
    const result = await fetch(
      `http://localhost:5000/api/lessons/update/clicked/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!result.ok) {
      console.log("error");
      return "Error: failed to get products";
    }

    return await result.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function getBestLesson() {
  try {
    const result = await fetch(
      "http://localhost:5000/api/lessons/fetch/best",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!result.ok) {
      console.log("error");
      return "Error: failed to get products";
    }
    const data = await result.json();
    return data.data[0];
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateLesson(values, id) {
  try {
    const result = await fetch(
      `http://localhost:5000/api/lessons/update/${id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteLesson(id) {
  try {
    const result = await fetch(
      `http://localhost:5000/api/lessons/delete/${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createLesson(values) {
  try {
    const result = await fetch(
      `http://localhost:5000/api/lessons/create`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
