import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    SafeAreaView,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export default function Login({ navigation }) {

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    useEffect(() => {
        // createTable();
        // getData();
    }, []);

    // const createTable = () => {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             "CREATE TABLE IF NOT EXISTS "
    //             + "Users "
    //             + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
    //         )
    //     })
    // }

    // const getData = () => {
    //     try {
           
    //         db.transaction((tx) => {
    //             tx.executeSql(
    //                 "SELECT Name, Age FROM Users",
    //                 [],
    //                 (tx, results) => {
    //                     var len = results.rows.length;
    //                     if (len > 0) {
    //                         navigation.navigate('Home');
    //                     }
    //                 }
    //             )
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const setData = async () => {
    //     if (name.length == 0 || age.length == 0) {
    //         Alert.alert('Warning!', 'Please write your data.')
    //     } else {
    //         try {
    //             dispatch(setName(name));
    //             dispatch(setAge(age));
    //             // var user = {
    //             //     Name: name,
    //             //     Age: age
    //             // }
    //             // await AsyncStorage.setItem('UserData', JSON.stringify(user));
    //             await db.transaction(async (tx) => {
    //                 // await tx.executeSql(
    //                 //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
    //                 // );
    //                 await tx.executeSql(
    //                     "INSERT INTO Users (Name, Age) VALUES (?,?)",
    //                     [name, age]
    //                 );
    //             })
    //             navigation.navigate('Home');
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    return (
        <SafeAreaView style={styles.body} >
            {/* <Image
                style={styles.logo}
                source={require('../../assets/redux.png')}
            /> */}
            <Text style={styles.text}>
                Redux
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                //value={age}
                onChangeText={(value) => dispatch(setAge(value))}
            />
            <CustomButton
                title='Login'
                color='lightblue'
                onPressFunction={()=>navigation.navigate('Home')}
            /> 
            <CustomButton
                title='Get Api'
                color='lightblue'
                onPressFunction={()=>navigation.navigate('PracticeScreen')}
            />
            <CustomButton
                title='Bridging'
                color='lightblue'
                onPressFunction={()=>navigation.navigate('BridgingScreen')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent:'center'
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#000',
        marginBottom: 100,
    },
    input: {
        width: 300,
        height:60,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})