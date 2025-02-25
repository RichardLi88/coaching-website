const url = "https://webdev-2kdh.onrender.com";

export async function signUp(data) {
  try {
    const response = await fetch(
      "https://webdev-2kdh.onrender.com/api/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const processedData = await response.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}

export async function login(data) {
  try {
    const response = await fetch(
      "https://webdev-2kdh.onrender.com/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const processedData = await response.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}

export async function logout() {
  try {
    const response = await fetch(
      "https://webdev-2kdh.onrender.com/api/user/logout",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const processedData = await response.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUsers() {
  try {
    const response = await fetch(
      "https://webdev-2kdh.onrender.com/api/user/get",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const processedData = await response.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(
      `https://webdev-2kdh.onrender.com/api/user/delete/${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const processedData = await response.json();
    return processedData;
  } catch (err) {
    console.log(err.message);
  }
}
