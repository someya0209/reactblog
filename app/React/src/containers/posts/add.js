import { connect } from 'react-redux';
import PostAdd from '../../components/posts/add';
import {postAddFetchRequest} from '../../redux/actions/posts/add';

const mapStateToProps = state => {
    state = state.PostAddReducer;
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postAddHandleSubmit(values){
            dispatch(postAddFetchRequest(values));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);
