import React, {useEffect} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DriverItem from "./DriverItem/DriverItem";
import {useNavigation} from '@react-navigation/native';


const DriverList = ({driversData, getDriversAction}) => {
    const {navigate} = useNavigation()

    useEffect(() => {
        getDriversAction()
    }, [])

    const onPressToResults = (driverId) => {
        navigate('RiseResults', {driverId})
    }

    return (
        <View style={{marginBottom: 30}}>
            {driversData && driversData?.map((el) => {
                return (
                    <View key={el.driverId} style={styles.container}>
                        <DriverItem  driverId={el.driverId} name={el.givenName}/>
                        <TouchableOpacity onPress={() => onPressToResults(el.driverId)} style={styles.results}>
                            <Text style={{color: '#fff'}}>Results</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    results: {
        backgroundColor: '#363636',
        padding: 5,
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 4.65,

        elevation: 8,
    }

});
export default DriverList
