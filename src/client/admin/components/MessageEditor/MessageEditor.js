import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';

import TextField from 'material-ui/lib/text-field';

import Datas from 'lib/collections/Datas';

@reactMixin.decorate(ReactMeteorData)
class MessageEditor extends React.Component {
    getMeteorData() {
        Meteor.subscribe('datas');

        return {
            message: Datas.findOne('message')
        };
    }

    messageChanged() {
        Meteor.call('updateMessage', this.refs.textField.getValue());
    }

    render() {
        const value = this.data.message ? this.data.message.text : '';

        return (
            <div>
                <h1>MESSAGE EDITOR</h1>
                <TextField
                    floatingLabelText="Message"
                    value={value}
                    type="text"
                    ref="textField"
                    onChange={this.messageChanged.bind(this)}/>
            </div>
        );
    }
}

export default MessageEditor;
