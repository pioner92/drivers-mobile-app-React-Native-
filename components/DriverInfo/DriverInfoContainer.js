import {connect} from 'react-redux'
import {getDriverInfo} from "../../Redux/Actions/Actions";
import DriverInfo from "./DriverInfo";

const mapStateToProps = ({driversData,driver}) => {
    return {
        driversData,
        driver
    }
}
export const DriverInfoContainer = connect(mapStateToProps,{
    getDriverInfo
})(DriverInfo)
