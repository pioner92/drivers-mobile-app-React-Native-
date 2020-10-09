import React from 'react'
import {StyleSheet} from 'react-native';
import Home from "./components/Home/Home";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "react-redux";
import {Store} from "./Redux/Store/Store";
import {DriverInfoContainer} from "./components/DriverInfo/DriverInfoContainer";
import {RiseResultsContainer} from "./components/RiceResults/RiseResultsContainer";


const Stack = createStackNavigator();

const App = () => {

    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: '#fe7d55',
                        shadowColor: "#fe7d55",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 7,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                >
                    <Stack.Screen  name="Home" component={Home}/>
                    <Stack.Screen options={{title: 'Driver Info'}} name="DriverInfo" component={DriverInfoContainer}/>
                    <Stack.Screen options={{title: 'Rise Results'}} name="RiseResults" component={RiseResultsContainer}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
};

const styles = StyleSheet.create({
    container: {
        // height: '100%',
    },


});

export default App;
