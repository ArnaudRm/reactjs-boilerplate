import React from 'react';
import SignForm from './SignForm';

class Login extends React.Component {
    
    render() {
        return (
            <SignForm
                formType="login"
            />
        );
    }

};

export default Login;