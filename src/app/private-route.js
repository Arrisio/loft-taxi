import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {getIsLoggedIn} from '../modules/auth/selectors'


const PrivateRoute = (props) => (
    <>{
        (props.isLoggetIn)
            ? props.children
            : <Redirect to='/signin' />
    }</>
    )


const mapStateToProps = state => ({isLoggetIn: getIsLoggedIn(state)})
export default connect(mapStateToProps,null)(PrivateRoute);