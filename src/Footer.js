import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <Footer>
                    <p>{this.props.name}</p>
                </Footer>
            </div>
        );
    }
}