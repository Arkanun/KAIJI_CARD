import React, {Component} from 'react';
import classes from './Footer.module.scss';
import Aux from './../../containers/hoc/Aux'

class Footer extends Component {
    state = {
        accepted: false,
    }

    componentWillMount() {
        const accept = localStorage.getItem('accepted');
        if(accept) {
            this.setState({accepted: accept})
        }
    }

    toggleAccepted = () => {
        this.setState({accepted: true})
        localStorage.setItem('accepted', true)
    }
    render() {
        let footer;
        if(!this.state.accepted) {
            footer = (<div className={classes.footer}>
                <p className={classes.footer_info}>This site uses cookies to make your browsing experience better. We also use google analytics for tracking purposes and we are confident that it is secure.</p>
                <button onClick={this.toggleAccepted} className={classes.footer_button}>ACCEPT</button>
            </div>)
        } 
        
        if(!this.props.shouldShow || this.state.accepted) {
            footer = null;
        }
        return(
            <Aux>
                {footer}
            </Aux>
        )
    }
}


export default Footer;