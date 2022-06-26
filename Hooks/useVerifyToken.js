import axios from "axios";

export const useVerifyToken  = async (data) => {
      try {
        await axios.post('/auth/validate-token', data).then(response =>{
            return response;
         });
         
      } catch (error) {}
   }
