import React from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Card color="info">
                <CardBody>
                    <CardTitle className='text-white'>{props.Title}</CardTitle>
                </CardBody>
                <img src={props.Image} height="150px" width= "285px"/>
                <CardBody>
                    <CardText className="text-white">
                        {props.date}
                    </CardText>
                    <CardText className="text-white">
                        {props.price}
                    </CardText>
                    <CardLink href="#" className="text-danger">{props.ticket}</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;