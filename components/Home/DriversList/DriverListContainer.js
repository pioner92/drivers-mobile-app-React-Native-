import {connect} from 'react-redux'
import DriverList from "./DriverList";
import {getDriversAction} from "../../../Redux/Actions/Actions";

const mapStateToProps = ({driversData}) => {
    return {
        driversData
    }
}


export const DriverListContainer = connect(mapStateToProps,{
    getDriversAction
})(DriverList)
