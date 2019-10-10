import { connect } from 'react-redux';
import App from '../components/App';
import { inputTask, addTask } from '../redux/actions/tasks';

function mapStateToProps({task,tasks}) {
        return {
                task,
                tasks
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
