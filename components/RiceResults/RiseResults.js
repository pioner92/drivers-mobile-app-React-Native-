import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export const RiseResults = ({route, getRiceResult, riseResult,resetRiceResults}) => {

    useEffect(() => {
        getRiceResult(route.params.driverId)
        return () =>{
            resetRiceResults()
        }
    }, [])

    useEffect(() => {
    }, [riseResult])

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    {riseResult.map((el, index) => {
                        return (

                            <View style={styles.container} key={el.season + index}>
                                <View style={styles.tableTitle}>
                                    <Text style={{fontWeight: '600'}}>{el.season} {el.raceName}</Text>
                                </View>
                                <View style={styles.br}/>
                                <View style={styles.table}>
                                    <TableColumn title='Position' value={el.Results[0].position}/>
                                    <TableColumn title='Number' value={el.Results[0].number}/>
                                    <TableColumn title='Driver'
                                                 value={`${el.Results[0].Driver.givenName} ${el.Results[0].Driver.familyName}`}/>
                                    <TableColumn title='Constructor' value={el.Results[0].Constructor.name}/>
                                </View>
                                <View style={styles.br}/>
                                <View style={styles.table}>
                                    <TableColumn title='laps' value={el.Results[0].laps}/>
                                    <TableColumn title='grid' value={el.Results[0].grid}/>
                                    <TableColumn title='status' value={el.Results[0].status}/>
                                    <TableColumn title={'points'} value={el.Results[0].points}/>
                                </View>
                            </View>

                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const TableColumn = ({title, value}) => {
    return (
        <View style={styles.column}>
            <Text style={styles.columnTitle}>{title}</Text>
            <Text style={styles.columnValue}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderWidth: 1,
        // padding: 3,
        margin: 10,
        borderRadius: 5
    },
    tableTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,

        // marginBottom: 5,
    },
    table: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    column: {
        alignItems: 'center',
        width: '25%',
        padding: 2,
    },
    columnTitle: {
        fontSize: 12,
        fontWeight: '900',
        marginBottom:1
    },
    columnValue: {
        fontSize: 12,
        textAlign:'center'
    },
    br: {
        borderWidth: 0.5,
        width: '100%',
    }
});

