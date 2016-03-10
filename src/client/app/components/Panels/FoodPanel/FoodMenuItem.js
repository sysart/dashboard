import React from 'react';
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
                {this.props.set.name && (
                    <div style={styles.name}>{this.props.set.name}</div>
                )}
                {components}
                {this.props.set.price && (
                    <div style={styles.price}>Hinta: {this.props.set.price}</div>
                )}
            </div>
        )
    }
}

const styles = {
    container: {
        marginBottom: '20px'
    },
    item: {
        marginBottom: '5px'
    },
    name: {
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold'
    }
};

export default Radium(FoodMenuItem);
