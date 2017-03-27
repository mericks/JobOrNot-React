import React from 'react';
import SingleInput from './SingleInput';

const TalentForm = (props) => (
    <div>
        <form onSubmit={this.handleFormSignUp}>
            <h1>THIS FORM SIGNS UP TALENT</h1>
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
                title={'Resume'}
                name={'resume'}
                inputType={'text'}
                content={this.state.resume}
                controlFunc={this.handleResumeChange}
                placeholder={'Holding box for resume uploads'} />
            <SingleInput 
                title={'Skills'}
                name={'skills'}
                inputType={'text'}
                content={this.state.skills}
                controlFunc={this.handleSkillsChange}
                placeholder={'Top Skills'} />
            <SingleInput 
                title={'Locations'}
                name={'locations'}
                inputType={'text'}
                content={this.state.locations}
                controlFunc={this.handleLocationsChange}
                placeholder={'Locations'} />
            <button onClick={this.handleFormClear}>
                Clear Form
            </button>
            <input 
                type='submit'
                value='submit'/>
        </form>
    </div>
)

export default TalentForm;