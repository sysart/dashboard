import React from 'react';

class FoodMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const components = this.props.set.components.map((component, index) => {
            return (<div key={index}>{component}</div>);
        });

        return (
            <div className="menu-set">
                {components}
                <div className="set-price">Hinta: {this.props.set.price}</div>
            </div>
        )
    }
}

export default FoodMenuItem;
