import Request from "../api/request";
export const baseUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8181/api/v1";
export const backendImageServer = process.env.REACT_APP_IMAGE_BACKEND_SERVER_URL || "http://localhost:8181";

const getUsers = async () => {
  const { data } = await Request.get(`${baseUrl}/users`);
  console.log(data, " data")
  return { data };
};

const toggleUserStatus = async (userId: string) => {
  const { data } = await Request.patch(
    `${baseUrl}/users/${userId}/toggleStatus`
  );
  return { data };
};

const UsersService = {
  getUsers,
  toggleUserStatus,
};

export default UsersService;
