import React from 'react';
import SingleInput from './SingleInput';

const RecruiterForm = (props) => (
    <div>
        <form onSubmit={this.handleFormSignUp}>
            <h1>THIS FORM SIGNS UP RECRUITERS</h1>
            <SingleInput 
                title={'First Name'}
                name={'firstName'}
                inputType={'text'}
                content={this.state.firstName}
                controlFunc={this.handleFirstNameChange}
                placeholder={'First Name'} />
            <SingleInput 
                title={'Last Name'}
                name={'lastName'}
                inputType={'text'}
                content={this.state.lastName}
                controlFunc={this.handleLastNameChange}
                placeholder={'Last Name'} />
            <SingleInput 
                title={'User Name'}
                name={'userName'}
                inputType={'text'}
                content={this.state.userName}
                controlFunc={this.handleUserNameChange}
                placeholder={'Select a User Name'} />
            <SingleInput 
                title={'Email Address'}
                name={'email'}
                inputType={'text'}
                content={this.state.email}
                controlFunc={this.handleEmailChange}
                placeholder={'Email Address'} />
            <SingleInput 
                title={'Password'}
                name={'password'}
                inputType={'text'}
                content={this.state.password}
                controlFunc={this.handlePasswordChange}
                placeholder={'Select a Password'} />
            <SingleInput 
                title={'Company'}
                name={'company'}
                inputType={'text'}
                content={this.state.company}
                controlFunc={this.handleCompanyChange}
                placeholder={'Company'} />
            <SingleInput 
                title={'Title of Role You are Working to Fill'}
                name={'jobTitleToFill'}
                inputType={'text'}
                content={this.state.jobTitleToFill}
                controlFunc={this.handleJobTitleToFillChange}
                placeholder={'Job Title'} />
            <SingleInput 
                title={'Company for Role You are Working to Fill'}
                name={'jobCompanyToFill'}
                inputType={'text'}
                content={this.state.jobCompanyToFill}
                controlFunc={this.handleJobCompanyToFillChange}
                placeholder={'Hiring Company'} />
            <button onClick={this.handleFormClear}>
                Clear Form
            </button>
            <input 
                type='submit'
                value='submit'/>
        </form>
    </div>
)

export default RecruiterForm;