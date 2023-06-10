import api from "./api";
import TokenService from "./token.service";

function authHeader() {
  return { Authorization: "Bearer " + TokenService.getLocalAccessToken() };
}

const getAllUsers = async () => {
  return await api.get("/auth/users", { headers: authHeader() });
};

const getUserBoard = async () => {
  return await api.get("/auth/user", { headers: authHeader() });
};

const getComapnies = async () => {
  return await api.get("/companies/index", { headers: authHeader() });
};

const getInsurances = async (personalId) => {
  console.log(personalId,"personal");
  return await api.get(
    "/insurancesCars/getinsurences",
    {
      params: {
        personal_id: personalId,
      },
    },
    { headers: authHeader() }
  );
};

const UserService = {
  getAllUsers,
  getUserBoard,
  getComapnies,
  getInsurances,
};

export default UserService;
