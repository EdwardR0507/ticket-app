export const getLastest = async () => {
  try {
    // The socket host has the same port as the backend server
    const response = await fetch(`${import.meta.env.VITE_SOCKET_URL}/latest`);
    const data = await response.json();
    if (response.ok) {
      return data.lastest;
    }
  } catch (error) {
    console.log(error);
  }
};
