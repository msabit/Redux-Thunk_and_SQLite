
import Axios from 'react-native-axios';

export const AxiosGet = async (apiName) => {
    Axios.get('https://api.sampleapis.com/coffee/hot')
        .then(async (response) => {
         // console.log('Cofee Data:===>' + JSON.stringify(response.data));
          if (response.data) {
           return response.data;
          }
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

};