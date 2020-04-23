import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getIsLoggedIn} from '../modules/auth/selectors'

const renderComponent = (children, RouteComponent, ...rest) => (
    <Route {...rest} >
        <>
            {RouteComponent && <RouteComponent/>}
            {children}
        </>
    </Route>
)

const AuthRoute = ({isLoggetIn, authType = 'private', children, component: RouteComponent , ...rest}) => {
    if (
        (isLoggetIn && authType === 'private') ||
        (!isLoggetIn && authType === 'identity-page')
    ){
        return  renderComponent(children, RouteComponent, rest)
    } else if (!isLoggetIn && authType === 'private') {
        return <Redirect to='/signin'/>
    } else if (isLoggetIn && authType === 'identity-page') {
        return <Redirect to='/'/>
    } else {
        return renderComponent(children, RouteComponent, rest)
    }
}


const mapStateToProps = state => ({isLoggetIn: getIsLoggedIn(state)})
export default connect(mapStateToProps, null)(AuthRoute);