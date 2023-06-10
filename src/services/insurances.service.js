import api from "./api";
import TokenService from "./token.service";
  const getinsurances = async (personalId) => {
    const response = await api
          .get(
              "/insurancesCars/getinsurences",
              {
                  params: {
                      personal_id: personalId,
                  },
              },
              { headers: TokenService.getLocalAccessToken() }
          );
      console.log(response.data.companies);
      return response.data.companies;
  }
  const InsurancesService = {
    getinsurances
  };
  
  export default InsurancesService;
