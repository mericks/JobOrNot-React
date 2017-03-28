import React from 'react';
// TODO: THIS SHOULD WORK

const ProfileInfo = (props) => {
    
    /* this map won't work because user is going to be an object, not an array */
    // const profileInputs = props.user.map((input, i) => {
    //     return <li>{input}</li>;
    // });

    return (
        // <ul>{profileInputs}</ul>

        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
}

export default ProfileInfo;