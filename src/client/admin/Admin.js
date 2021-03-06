import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import Radium from 'radium'

import AppBar from 'material-ui/lib/app-bar';

import AdminLeftNav from './components/AdminLeftNav/AdminLeftNav';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            leftNavOpen: false
        };
    }

    openLeftNav() {
        this.setState({
            leftNavOpen: true
        });
    }

    closeLeftNav() {
        this.setState({
            leftNavOpen: false
        });
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Admin"
                    showMenuIconButton={true}
                    onLeftIconButtonTouchTap={this.openLeftNav.bind(this)}
                />

                <AdminLeftNav
                    open={this.state.leftNavOpen}
                    onClose={this.closeLeftNav.bind(this)}
                />

                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        maxWidth: '960px',
        margin: '0 auto'
    }
};

export default Radium(Admin);
