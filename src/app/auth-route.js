import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getIsLoggedIn} from '../modules/auth/selectors'


const AuthRoute = ({isLoggetIn, authType = 'private', children}) => {
    if (isLoggetIn && authType === 'private') {
        return <>{children}</>
    } else if (!isLoggetIn && authType === 'private') {
        return <Redirect to='/signin'/>
    } else if (isLoggetIn && authType === 'identity-page') {
        return <Redirect to='/'/>
    } else {
        return <>{children}</>
    }

    // <>{
    //     (isLoggetIn)
    //         ? props.children
    //         : <Redirect to='/signin'/>
    // }</>
}


const mapStateToProps = state => ({isLoggetIn: getIsLoggedIn(state)})
export default connect(mapStateToProps, null)(AuthRoute);