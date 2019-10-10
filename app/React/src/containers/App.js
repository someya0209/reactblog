import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
        state = state.AppReducer;
        return {
            ...state,
        };
}

function mapDispatchToProps(dispatch) {
        return {

        };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
