import React from 'react';
import { connect } from 'react-redux';
import { uploadDocumentRequest } from '../../actions/upload-actions';

class UploadFiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            name: ''
        };
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFileUpload(e) {
        e.preventDefault();

        this.props.uploadFile({
            file: this.state.file,
            name: this.state.name,
            token: this.props.token
        });
        alert('resume uploaded!');
    }

    handleFileChange(e) {
        e.preventDefault();
        this.setState({
            file: e.target.files[0],
            name: e.target.files[0].name
        });
    }

    render() {
        return (
            /*TODO: have a message about upload success*/
            <div>
                <h4>Upload Resume</h4>
                <form onSubmit={this.handleFileUpload}>
                    Resume: <input type='file' name='resume' onChange={this.handleFileChange} />
                    <button type='submit' onClick={this.handleFileUpload}>Submit Resume</button> 
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.userAuth.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uploadFile: (options) => dispatch(uploadDocumentRequest(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFiles);

UploadFiles.propTypes = {
    uploadFile: React.PropTypes.func,
    token: React.PropTypes.string
};
