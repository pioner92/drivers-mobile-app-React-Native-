import {connect} from 'react-redux'
import {Pagination} from "./Pagination";
import {getDriversAction} from "../../../Redux/Actions/Actions";

const mapStateToProps = ({maxDriversOffset}) => {
    return {
        maxDriversOffset
    }
}

export const PaginationContainer = connect(mapStateToProps,{getDriversAction})(Pagination)
