import React, { PropTypes } from 'react';

import { Link } from 'react-router'

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

const MENU_ITEMS = [
    {
        route: '/admin/stats',
        text: 'Stats'
    },
    {
        route: '/admin/message',
        text: 'Message'
    }
];

class AdminLeftNav extends React.Component {
    constructor(props) {
        super(props);
    }

    goTo(route) {
        this.context.router.push(route);
        this.props.onClose();
    }

    render() {
        const menuItems = MENU_ITEMS.map((menuItem) => {
            return (
                <MenuItem key={menuItem.route} onTouchTap={this.goTo.bind(this, menuItem.route)}>
                    {menuItem.text}
                </MenuItem>
            );
        });

        return (
            <LeftNav
                ref="leftNav"
                docked={false}
                open={this.props.open}
                onRequestChange={this.props.onClose}
            >
                {menuItems}
            </LeftNav>
        );
    }
}

AdminLeftNav.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

AdminLeftNav.contextTypes = {
    router: PropTypes.object
}

export default AdminLeftNav;
