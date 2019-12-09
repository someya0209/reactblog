import { connect } from 'react-redux';
import PostIndex from '../../components/posts/index';
import { postIndexFetchRequest, postIndexDelete, inputTask, addTask} from '../../redux/actions/posts/index';

const mapStateToProps = state => {
    state = state.PostIndexReducer;
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
            fetchRequest() {
                dispatch(postIndexFetchRequest());
            },
            postDelete(id) {
                dispatch(postIndexDelete(id));
            }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
