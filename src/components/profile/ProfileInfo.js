import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

/* mapping an object, excluded from view */
// const ProfileFormFields = (props) => {
//     let obj = props.user;
//     let listItemArray = [];
//     for (const prop in obj) {
//         console.log('obj: ', prop, '=', obj[prop]);
//         let formFields = obj[prop];
//         if (prop !== 'hash' && prop !== '__v' && prop !== '_id' && 
//             prop !== 'jobTitleToFill' && prop !== 'jobCompanyToFill' && 
//             prop !== 'role') {
//             listItemArray.push(<li key={prop}>{prop}: {formFields}</li>);
//         }
//     };
//     console.log('liarry is', listItemArray);
//     return (<ul>{listItemArray}</ul>);
// };

const ProfileInfo = (props) => {
    let user = props.user
    // let fields = ProfileFormFields();
    // console.log('fields is', fields);
    return (
        <div>
            <h3>Your Profile</h3>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company}</p>
            <p>Favorited resumes: {user.likedResumes}</p>
        </div>
    );
}; 

export default connect(mapStateToProps)(ProfileInfo);

ProfileInfo.propTypes = {
    user: PropTypes.object
};
