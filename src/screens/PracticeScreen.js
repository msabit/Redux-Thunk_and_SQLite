import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useLayoutEffect,useState} from 'react'
import Axios from 'react-native-axios'
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../redux/actions';

import { AxiosGet } from '../utils/AxiosApi';

const PracticeScreen = () => {

    //const [list,setList] =useState([]);
    const { list} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useLayoutEffect(()=>{
        handleGetData();
    },[])
   
    const handleGetData=async()=>{
        Axios.get('https://api.sampleapis.com/coffee/hot')
        .then(async (response) => {
         // console.log('Cofee Data:===>' + JSON.stringify(response.data));
          if (response.data) {
           dispatch(setList(response.data));
          }
        })
        .catch(function (error) {
          console.log(error);
        });

        // const response = await Axios({
        //     url: 'https://api.sampleapis.com/coffee/hot',
        //     method: 'GET',
        //     headers: {
        //       Accept: 'application/json',
        //     }
        //   })
        //   console.warn("RESPONSE", response);
        //   dispatch(setList(response.data))
          
        // const response = await AxiosGet('https://api.sampleapis.com/coffee/hot')
        //   console.warn("RESPONSE", response);
        //   dispatch(setList(response))
          


         }

      //  console.log('Cofee Data:===>' + JSON.stringify(list));

  return (
    <View style={styles.container}>
      {list?.map((item,index)=>{
        return(
            <Text key={index.toString()}>{item?.title}</Text>
        )
      })}
    </View>
  )
}

export default PracticeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})