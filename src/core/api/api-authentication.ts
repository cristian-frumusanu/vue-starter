import axiosInstance from '../utilities/axios-instance';

import { ILoginModel } from '../models/login';

const AuthenticationAPI = {
  authenticate(loginData: ILoginModel) {
    return axiosInstance.post('/App/login', loginData);
  },
};

export default AuthenticationAPI;
