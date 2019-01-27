import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import Cards from './Content';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Header
                                airlines="Авиакомпании" booking="Бронирование билетов"
                                contacts="Контакты"
                                about="О нас"/>
                    </Row>
                    <Row end="xs">
                        <Col xs={10}>
                            <Row>
                                <Col className="mt-5" xs={4}>
                                    <Cards ticket="Купить билет" date="Дата: 01-01-2019"
                                           Image="https://www.nat-geo.ru/upload/iblock/8ac/8acb5e38bcd9e778ba1178ca09d8c1b2.jpg" Title="Бишкек - Истанбул"
                                           price="Цена: 250$"/>
                                </Col>
                                <Col className="mt-5" xs={4}>
                                    <Cards ticket="Купить билет" date="Дата: 02-02-2019"
                                           Image="https://cdn.vdmsti.ru/image/2018/26/wlu49/default-169a.jpg" Title="Бишкек - Москва"
                                           price="Цена: 150$"/>
                                </Col>
                                <Col className="mt-5" xs={4}>
                                    <Cards ticket="Купить билет" date="Дата: 03-03-2019"
                                           Image="https://cdn.airlines-inform.ru/upload/iblock/fe7/Rossiya-Airlines-A319.jpg" Title="Бишкек - Ош"
                                           price="Цена: 50$"/>
                                </Col>
                                <Col className="mt-5" xs={4}>
                                    <Cards ticket="Купить билет" date="Дата: 04-04-2019"
                                           Image="https://cdn.airlines-inform.ru/upload/iblock/fe7/Rossiya-Airlines-A319.jpg" Title="Бишкек - Ташкент"
                                           price="Цена: 100$"/>
                                </Col>
                            </Row>

                        </Col>
                        <Sidebar kyrgyzairlines="Manas Air" turkishairlines="Turkish Airlines" emiratesairlines= "Fly Emirates"
                                 russianairlines="Aeroflot"/>
                    </Row>
                    <Row>
                        <Footer name="Белек" />
                    </Row>

                </Container>
            </div>
        );
    }
}

export default App;
