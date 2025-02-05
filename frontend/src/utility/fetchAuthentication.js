export async function signUp(data) {
  try {
    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const processedData = await response.json();

    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}
