import React, { PropTypes } from 'react';
import Radium from 'radium';

class Footer extends React.Component {
    render() {
        const text = 'news... '.repeat(50);
        
        return (
            <div style={styles.container}>
                <marquee>{text}</marquee>
            </div>
        );
    }
}

const styles = {
    container: {
        background: 'black',
        padding: '10px 0'
    }
};

export default Radium(Footer);
