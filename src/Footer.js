import React from 'react';
import {Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <Row style={{ backgroundColor: "green", width: "100%" }}>
                <Col xs={12}>
                    <p className="text-white mt-2">Адрес: {this.props.addres}</p>
                    <p className="text-white">Телефон: {this.props.phone}</p>
                </Col>
            </Row>
        );
    }
}