import React, {useEffect, useState} from 'react'
import {StyleSheet, Text,TouchableOpacity, View} from 'react-native';

export const Pagination = ({getDriversAction, maxDriversOffset}) => {
    const [offset, setOffset] = useState(0)

    const nexPage = () => {
        if (offset + 30 < maxDriversOffset)
            setOffset((prevState => prevState + 30))
    }
    const prevPage = () => {
        if (offset > 0) {
            setOffset((prevState => prevState - 30))
        }
    }
    useEffect(() => {
        console.log(offset)
        getDriversAction(offset)
    }, [offset])

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={prevPage}>
                    <View style={[styles.circle,{backgroundColor: offset/30===0?'#919090':'#3f3f3f'}]}>
                        <Text style={styles.button}>{"<"}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.pageNumber}>{Math.ceil(+offset/30)}</Text>
                </View>
                <TouchableOpacity onPress={nexPage}>
                    <View style={[styles.circle,{backgroundColor: offset+30>=maxDriversOffset?'#919090':'#3f3f3f'}]}>
                        <Text style={styles.button}>{">"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fe7d55',
        top:0,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    buttonsContainer: {
        marginTop:5,
        marginBottom:8,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        fontSize: 15,
        color:'#fbfafa'
    },
    circle: {
        backgroundColor: '#3f3f3f',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    pageNumber:{
        fontSize: 20,
        color:'#fff'
    }

});
