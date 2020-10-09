import React, {useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native';


const DriverInfo = ({route, driver, getDriverInfo}) => {


    useEffect(() => {
        console.log(route.params.driverId)
        getDriverInfo(route.params.driverId)
    }, [])

    useEffect(() => {
    }, [driver])
    return (
        <View>
            <Row title='ID' value={driver.driverId}/>
            <Row title='Given name' value={driver.givenName}/>
            <Row title='Family name' value={driver.familyName}/>
            <Row title='Date of birth' value={driver.dateOfBirth}/>
            <Row title='Nationality' value={driver.nationality}/>
        </View>
    );
};

const Row = ({title, value}) => {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{title}:</Text>
            <Text style={styles.title}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 20,
        marginTop: 20,
        // borderBottomColor:'black',
        // borderBottomWidth:1,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#3f3f3f',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    list: {}
});

export default DriverInfo;
