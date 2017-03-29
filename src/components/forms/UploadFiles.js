import React from 'react';
import { connect } from 'react-redux';
import { uploadDocumentRequest } from '../../actions/upload-actions';

class UploadFiles extends React.Component {
    constructor(props) {
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        this.props.uploadFile({
            file,
            name: e.target.files[0].name
        });
    }

    render() {
        return (
            <div>
                    <h1>THIS FORM UPLOADS RESUME</h1>
                Resume: <input type='file' name='resume'  onChange={this.handleFileUpload}/>
                {/*<button onClick={this.handleFileUpload}>SUBMIT RESUME</button>*/}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uploadFile: (options) => dispatch(uploadDocumentRequest(options))
    };
}

export default connect(null, mapDispatchToProps)(UploadFiles);

UploadFiles.propTypes = {
    uploadFile: React.PropTypes.func
};
