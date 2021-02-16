import { RegisterUserDto } from "../types/user.types";
import api from "./api";



class UserService{
async registerUser(newUser: RegisterUserDto){
    const response = await api.post('/users',newUser);   

    return response
}
}
export default new UserService();
