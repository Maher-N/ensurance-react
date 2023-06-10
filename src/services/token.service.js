const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    //console.log(user)
    return user?.authorisation.refreshToken;
  };
  
  const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.authorisation.accessToken;
  };
  
  const updateLocalAccessToken = (token) => {
    let data = JSON.parse(localStorage.getItem("user"));
    // console.log(user.data.authorisation.accessToken )
    data['authorisation']['accessToken'] =token;

    localStorage.setItem("user", JSON.stringify(data));
    // console.log(user.data.authorisation.accessToken )
    console.log(data)
  };
  
  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  const setUser = (user) => {
    //console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  const removeUser = () => {
    localStorage.removeItem("user");
  };
  
  const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
  };
  
  export default TokenService;