import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Apifetch from '../apifetch/Apifetch';
var { height, width } = Dimensions.get('screen');
import styles from '../commonComponents/styles';

const EmployeeList = ({ ...props }) => {
    const [employeelist, setEmployeeList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let value = await AsyncStorage.getItem('employee_list');
            if (value !== null) {
                var response = JSON.parse(value);
                setEmployeeList(response);
            } else {
                getEmployeeList()
            }
        } catch (error) {
            console.log("some error", error)
        }
    }

    const getEmployeeList = async () => {
        var data = {
            url: 'https://www.mocky.io/v2/5d565297300000680030a986',
            params: {
                method: 'GET'
            }
        }
        var ApiResponse = await Apifetch(data)
        if (ApiResponse) {
            setEmployeeList(ApiResponse);
            try {
                let info = JSON.stringify(ApiResponse);
                await AsyncStorage.setItem('employee_list', info);
            } catch (error) {
                console.log("some error", error)
            }
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={employeelist}
                ListHeaderComponent={() => {
                    return (
                        <View style={{ width: width * 0.9, marginVertical: 10, marginHorizontal: 5, padding: 15, backgroundColor: '#fff', borderRadius: 15 }} >
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#2A91D4' }}>Employee List</Text>
                        </View>
                    )
                }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{ width: width * 0.9, margin: 5, padding: 15, backgroundColor: '#fff', borderRadius: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => props.navigation.navigate("EmployeeDetails", { employee_data: item })}>
                            <View>
                                <Image source={item?.profile_image ? { uri: item?.profile_image } : require('../assets/images/download.png')} style={{ width: width * 0.15, height: width * 0.15, borderRadius: 15, overflow: 'hidden', resizeMode: 'contain' }} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#013354' }}>{item?.name ?? "Not specified"}</Text>
                                <Text style={styles.commonText1}>{item?.company?.name ?? "Not specified"}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                ListEmptyComponent={() => {
                    return (
                        <>
                            <Text style={styles.commonText1}>No Data</Text>
                        </>
                    )
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default EmployeeList;