import {GETDRIVERINFO, GETDRIVERS, GETRICERESULT, RESETRISERESULTS} from "../Constant/Constant";
import axios from 'axios'

const writeToStoreDriversAction = (driversData) => {
    return {
        type: GETDRIVERS,
        driversData:driversData.MRData.DriverTable.Drivers,
        maxOffset: driversData.MRData.total
    }
}
export const writeToStoreRiceResultAction = (result) => {
    return {
        type:GETRICERESULT,
        result:result.MRData.RaceTable.Races,
        maxOffset:result.MRData.total
    }
}

export const resetRiceResults = () => {
    return {
        type: RESETRISERESULTS
    }
}

export const getDriversAction = (offset= 0) => {
    return (dispatch) => {
        axios(`http://ergast.com/api/f1/drivers.json?offset=${offset}`)
            .then((data)=>dispatch(writeToStoreDriversAction(data.data)))
    }
}

export const getDriverInfo = (driverId) => {
    console.log('ACTIONS')
    console.log(driverId)
    return {
        type:GETDRIVERINFO,
        driverId
    }
}

export const getRiceResult = (driverId) => {
    return (dispatch) => {
        axios(`http://ergast.com/api/f1/drivers/${driverId}/results.json`)
            .then((data)=>dispatch(writeToStoreRiceResultAction(data.data)))
    }
}
