import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while calling addUser API ", error.message);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API ", error);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API ", error);
  }
};

export const newMessage = async (data) => {
  try {
    return await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessages API ", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile API ", error.message);
  }
};

// import axios from "axios";

// const url = "http://localhost:8000";

// export const addUser = async (data) => {
//   try {
//     await axios.post(`${url}/add`, data);
//   } catch (error) {
//     console.log("Error while calling addUser API ", error.message);
//   }
// };

// export const getUsers = async () => {
//   try {
//     let response = await axios.get(`${url}/users`);
//     return response.data;
//   } catch (error) {
//     console.log("Error while calling getUsers API ", error.message);
//   }
// };

// export const setConversation = async (data) => {
//   try {
//     await axios.post(`${url}/conversation/add`, data);
//   } catch (error) {
//     console.log("Error while calling setConversation API ", error);
//   }
// };

// export const getConversation = async (data) => {
//   try {
//     let response = await axios.post(`${url}/conversation/get`, data);
//     return response.data;
//   } catch (error) {
//     console.log("Error while calling getConversation API ", error);
//   }
// };

// export const newMessage = async (data) => {
//   try {
//     return await axios.post(`${url}/message/add`, data);
//   } catch (error) {
//     console.log("Error while calling newConversations API ", error);
//   }
// };

// export const getMessages = async (id) => {
//   try {
//     let response = await axios.get(`${url}/message/get/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log("Error while calling getMessages API ", error.message);
//   }
// };

// export const uploadFile = async (data) => {
//   try {
//     return await axios.post(`${url}/file/upload`, data);
//   } catch (error) {
//     console.log("Error while calling uploadFile API ", error.message);
//   }
// };

// // New API call for uploading voice notes
// export const uploadVoiceNote = async (data) => {
//   try {
//     return await axios.post(`${url}/voice/upload`, data);
//   } catch (error) {
//     console.log("Error while calling uploadVoiceNote API ", error.message);
//   }
// };
