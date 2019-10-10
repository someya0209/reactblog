import { connect } from 'react-redux';
import Test from '../../components/reduxtest/test';
import { inputTask, addTask } from '../../redux/actions/tasks';

const mapStateToProps = state => {
    state = state.ReduxtestReducer;
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
            }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
