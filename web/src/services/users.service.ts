import convertObjectToFormData from '../helper/convert-to-formdata';
import { RegisterUserDto } from "../types/user.types";
import api from "./api";

class UserService {
    async registerUser(newUser: RegisterUserDto, file: File | undefined) {
        console.log(newUser);
        
        const formData = convertObjectToFormData(new FormData(), newUser);

        if (file) {
            formData.append('file', file);
        }

        const response = await api({
            method: 'POST',
            url: '/users',
            data: formData,
            maxContentLength: Infinity,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response
    }
}
export default new UserService();
