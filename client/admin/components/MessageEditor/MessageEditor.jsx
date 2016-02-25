import React, { PropTypes } from 'react';

import TextField from 'material-ui/lib/text-field';

class MessageEditor extends React.Component {
    messageChanged() {
        Meteor.call('updateMessage', this.refs.textField.getValue());
    }

    render() {
        return (
            <div>
                <h1>MESSAGE EDITOR</h1>
                <TextField
                    floatingLabelText="Message"
                    type="text"
                    ref="textField"
                    onChange={this.messageChanged.bind(this)}/>
            </div>
        );
    }
}

export default MessageEditor;
