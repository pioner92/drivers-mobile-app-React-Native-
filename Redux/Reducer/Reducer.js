import {GETDRIVERINFO, GETDRIVERS, GETRICERESULT, RESETRISERESULTS} from "../Constant/Constant";

const initialState = {
    driversData:[],
    driver:{},
    maxDriversOffset:0,
    riseResult:[],
    riseResultMaxOffset:0
}

export const Reducer = (state=initialState,action) =>{
    switch (action.type){
        case GETDRIVERS:
            return {...state,driversData: action.driversData,maxDriversOffset: action.maxOffset};
        case GETDRIVERINFO:
            console.log('REDUCER')
            const driver = state.driversData.find((el)=>el.driverId === action.driverId)
            return {...state,driver}
        case GETRICERESULT:
            return {...state,riseResult: action.result,riseResultMaxOffset:action.maxOffset}
        case RESETRISERESULTS:
            return {...state,riseResult: [],riseResultMaxOffset: 0}
    }
    return state
}
