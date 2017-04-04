import React from 'react';
import { connect } from 'react-redux';
import { deleteProfile } from '../../actions/DeleteProfile-actions';
import { Link } from 'react-router-dom';
import { userLogoutSuccess } from '../../actions/auth-actions';

class DeleteProfile extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteProfile = this.handleDeleteProfile.bind(this);
    }

    handleDeleteProfile(e) {
        e.preventDefault();
        
        let answer = prompt('Do you really want to delete? y/n');

        if (answer === 'y') {
            this.props.deleteProfile({ method: 'DELETE', path: '/deleteAccount', token: this.props.token })
                .then(() => {
                    alert(this.props.message);
                    this.props.signOut();
                    this.props.history.push('/');
                });
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleDeleteProfile}>
                    <Link to='/delete-account'>Delete Account</Link>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userAuth.user._id,
        token: state.userAuth.token,
        message: state.deleteProfile.message
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteProfile: (options) => dispatch(deleteProfile(options)),
        signOut: () => dispatch(userLogoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfile);

DeleteProfile.propTypes = {
    deleteProfile: React.PropTypes.func,
    token: React.PropTypes.string,
    message: React.PropTypes.string,
    history: React.PropTypes.any,
    signOut: React.PropTypes.func
};
