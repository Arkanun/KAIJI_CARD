import React, { Component } from 'react'
import classes from './Layout.module.scss';
import Footer from '../Footer/Footer';
import {withRouter} from 'react-router-dom'

class Layout extends Component {
    render() {
        return (
            <div className={classes.background}>
                {this.props.children}
                <Footer shouldShow = {this.props.history.location.pathname === '/game' ? false : true}/>
            </div>
        )
    }
}

export default withRouter(Layout);