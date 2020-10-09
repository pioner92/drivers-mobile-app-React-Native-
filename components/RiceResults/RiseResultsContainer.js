import {connect} from 'react-redux'
import {RiseResults} from "./RiseResults";
import {getRiceResult, resetRiceResults} from "../../Redux/Actions/Actions";

const mapStateToProps = ({riseResult}) => {
    return {
        riseResult
    }
}

export const RiseResultsContainer = connect(mapStateToProps,{
    getRiceResult,resetRiceResults
})(RiseResults);
