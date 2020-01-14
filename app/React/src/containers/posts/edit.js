import { connect } from 'react-redux';
import PostEdit from '../../components/posts/edit';
import {postEditFetchRequest, postEditFetchSearch} from '../../redux/actions/posts/edit';

const mapStateToProps = state => {
    state = state.PostEditReducer;
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        PostSearch(id){
            dispatch(postEditFetchSearch(id));
        },
        postEditHandleSubmit(values){
            dispatch(postEditFetchRequest(values));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
