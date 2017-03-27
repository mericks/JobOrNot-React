import React from 'react';

const SingleInput = (props) => {
    return(
        <div>
            <label>{props.title}</label>
            <input
                name={props.name}
                type={props.inputType}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder} />
        </div>
    )
}

// SingleInput.propTypes = {
//     title: React.propTypes.string.isRequired,
//     name: React.propTypes.string.isRequired,
//     inputType: React.propTypes.oneOf(['text', 'number']).isRequired,
//     content: React.propTypes.oneOfType([
//         React.propTypes.string,
//         React.propTypes.number,
//     ]).isRequired,
//     placeholder: React.propTypes.string.isRequired,
// }

export default SingleInput;