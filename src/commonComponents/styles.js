import { StyleSheet, Dimensions } from 'react-native';
var { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: { alignItems: 'center' } ,
    commonText1: { fontFamily: 'Poppins-Light', fontSize: 12, color: '#013354' },
    commonText2: { fontFamily: 'Poppins-Regular', fontSize: 14, color: '#3787A2' },
    widget_container: { marginVertical: 5, width: width * 0.825, backgroundColor: '#ECFAFF', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 15 },
})
