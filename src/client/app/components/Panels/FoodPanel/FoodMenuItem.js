import React from 'react';

import styles from './styles.css';

class FoodMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const components = this.props.set.components.map((component, index) => {
            return (<div key={index} className={styles.item}>{component}</div>);
        });

        return (
            <div style={styles.container}>
                {this.props.set.name && (
                    <div className={styles.name}>{this.props.set.name}</div>
                )}
                {components}
                {this.props.set.price && (
                    <div className={styles.price}>Hinta: {this.props.set.price}</div>
                )}
            </div>
        )
    }
}

export default FoodMenuItem;
