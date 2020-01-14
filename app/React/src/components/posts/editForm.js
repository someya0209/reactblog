import React from 'react'
import { Field, reduxForm, getFormValues} from 'redux-form'
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
class EditForm extends React.Component{
    constructor(props) {
        super(props);
    };
    shouldComponentUpdate = function(nextProps, nextState) {
            return true;
    };
    render(){
        const { handleSubmit, postData, initialValues} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <div>
                    <Field
                        name="title"
                        component="input"
                        type="text"
                        placeholder="タイトルを入力"
                        />
                </div>
                <label>Body</label>
                <div>
                    <Field
                        name="body"
                        component="input"
                        type="text"
                        placeholder="内容を入力"
                        />
                </div>
                <div>
                    <Button
                        color="primary"
                        type="submit"
                        >
                        投稿
                    </Button>
                </div>
            </form>
        );
    }
}

EditForm = reduxForm({
    // a unique name for the form
    form: 'EditForm',
})(EditForm)

const mapStateToProps = state => {
    state = state.PostEditReducer;
    console.log(state['postdata']);
    let newValues = getFormValues('EditForm')(state);
    console.log(newValues);
    return {
        initialValues: {title: "", body: ""},
        values: {title: state['postdata'].title, body: state['postdata'].body}
    };
}
export default connect(mapStateToProps)(EditForm);
