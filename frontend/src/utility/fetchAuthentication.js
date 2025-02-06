export async function signUp(data) {
  try {
    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const processedData = await response.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}

export async function login(data) {
  try {
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const processedData = await response.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}
