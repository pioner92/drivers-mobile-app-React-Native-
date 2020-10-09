import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {DriverListContainer} from "./DriversList/DriverListContainer";
import {PaginationContainer} from "./Pagination/PaginationContainer";

const Home = () => {
    return (
        <View style={{backgroundColor: '#f0eded',flex:1}}>
            <PaginationContainer/>
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.list}>
                        <DriverListContainer/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop:10,
    },
    list: {}
});

export default Home
