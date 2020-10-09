import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation } from '@react-navigation/native';


const DriverItem = ({name,driverId}) => {
    const {navigate} = useNavigation()

    const opPress = ()=>[
        navigate('DriverInfo',{driverId})
    ]

    return (
        <View style={styles.container}>
            <Text onPress={opPress} style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '75%',
        backgroundColor: '#363636',
        marginTop: 10,
        alignSelf:'center',
        padding:5,
        borderRadius:5,
        borderWidth:1,
        // borderColor:'#ccc',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 4.65,

        elevation: 8,
    },
    text: {
        fontSize: 18,
        color:'#e8e8e8'
    }
});
export default DriverItem
