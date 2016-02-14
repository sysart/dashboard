import React from 'react';
import reactMixin from 'react-mixin';
import Radium from 'radium';

class FoodMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const components = this.props.set.components.map((component, index) => {
            return (<div key={index} style={styles.item}>{component}</div>);
        });

        return (
            <div style={styles.container}>
                {components}
                <div style={styles.price}>Hinta: {this.props.set.price}</div>
            </div>
        )
    }
}

const styles = {
    container: {
        background: 'rgba(255, 255, 255, .5)',
        marginBottom: '10px',
        padding: '10px'
    },
    item: {
        marginBottom: '10px'
    },
    price: {
        fontWeight: 'bold'
    }
};

export default Radium(FoodMenuItem);
