import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
var { height, width } = Dimensions.get('screen');
import styles from '../commonComponents/styles';

const EmployeeDetails = ({ ...props }) => {
    const [employeeData, setEmployeeData] = useState([]);
    useEffect(() => {
        let employee_data = props.route.params?.employee_data ?? [];
        setEmployeeData(employee_data)
    }, []);

    const Details = (title, data) => {
        return (
            <View style={styles.widget_container}>
                <Text style={styles.commonText1}>{title} </Text>
                <Text style={styles.commonText2}>{data}</Text>
            </View>
        )
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ width: width * 0.9, marginVertical: 15, padding: 15, backgroundColor: '#fff', borderRadius: 15 }}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={employeeData?.profile_image ? { uri: employeeData?.profile_image } : require('../assets/images/download.png')} style={{ width: width * 0.3, height: width * 0.3, borderRadius: 15, overflow: 'hidden', resizeMode: 'cover' }} />
                </View>
                <View style={{ marginTop: width * 0.05, alignSelf: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, textAlign: 'center', color: '#2A91D4' }}>{employeeData?.name ?? ""}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center' }}>{employeeData?.company?.name ?? ""}</Text>
                </View>

                <View style={{ marginVertical: width * 0.04, alignSelf: 'center' }}>
                    {Details('Username:', employeeData?.username ?? "Not specified")}
                    {Details('E-mail:', employeeData?.email ?? "Not specified")}
                    {Details('Phone Number:', employeeData?.phone ?? "Not specified")}
                    {Details('Website:', employeeData?.website ?? "Not specified")}
                    {Details('E-mail:', employeeData?.email ?? "Not specified")}
                    <View style={styles.widget_container}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, lineHeight: 40 }}>Company Details: </Text>
                        {Object.keys(employeeData?.company ?? {}).map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.commonText1}>{item}: </Text>
                                    <Text style={styles.commonText2}>{employeeData?.company[item] ?? "not specified"}</Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={styles.widget_container}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, lineHeight: 40 }}>Address Details: </Text>
                        <View>
                            {Object.keys(employeeData?.address ?? {}).map((item, index) => {
                                return (
                                    <View key={index}>
                                        <Text style={styles.commonText1}>{item}: </Text>
                                        <Text style={styles.commonText2}>{typeof employeeData?.address[item] === "string" ? employeeData?.address[item] ?? "not specified" :
                                            Object.keys(employeeData?.address[item] ?? {}).map((element, index) => {
                                                return (
                                                    <View key={index} style={{marginHorizontal: 15}}>
                                                        <Text style={styles.commonText1}>{element}: </Text>
                                                        <Text style={styles.commonText2}>{employeeData?.address[item][element] ?? "Not specified"}</Text>
                                                    </View>
                                                )
                                            })}
                                        </Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default EmployeeDetails;
