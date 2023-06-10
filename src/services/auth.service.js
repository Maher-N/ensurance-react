import api from "./api";
import TokenService from "./token.service";

  const login = (email, password) => {
    return api
      .post("/auth/login", { email, password })
      .then((response) => {
        console.log(response.data.authorisation.accessToken)
        if (response.data.authorisation.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  const logout = () => {
    TokenService.removeUser();
  }

  const register = (
    email,
    password,
    personal_id,
    district,
    locality,
    landline,
    mobile_number,
    role,
    years_of_driving,
    car_model,
    car_id,
    car_company,
    car_price,
    engine_size
  ) => {
    return api
      .post("/auth/register", {
        email,
        password,
        personal_id,
        district,
        locality,
        landline,
        mobile_number,
        role,
        years_of_driving,
        car_model,
        car_id,
        car_company,
        car_price,
        engine_size
      })
      .then((response) => {
        const { token } = response.data.authorisation;

        localStorage.setItem(
          "user",
          JSON.stringify(response.data)
        );
        
        //console.log();
        //console.log(response.data);
        return response.data.user;
      });
  }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const getinsurances = (personalId) => {
    return api
      .get(
        "/insurancesCars/getinsurences",
        {
          params: {
            personal_id: personalId,
          },
        },
        { headers: authHeader() }
      )
      .then((response) => {
        console.log(response.data.companies)
    

        return response.data.companies;
      });
  }
  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    getinsurances
  };
  
  export default AuthService;
