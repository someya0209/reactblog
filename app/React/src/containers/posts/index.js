import { connect } from 'react-redux';
import PostIndex from '../../components/posts/index';
import { postIndexFetchRequest, inputTask, addTask} from '../../redux/actions/posts/index';

const mapStateToProps = state => {
    state = state.PostIndexReducer;
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
            addTask(task) {
                    dispatch(addTask(task));
                    },
            inputTask(task) {
                    dispatch(inputTask(task));
            },
            fetchRequest() {
                    dispatch(postIndexFetchRequest());
            },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
