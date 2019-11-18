import React, {Component} from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import pic from '../assets/images/pic.jpg';

class Carousel extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: pic,
                    link: 'htts://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'San Pablo Seminary',
                    subTitle: 'Diocese of Baguio-Benguet Collegiate Seminary',
                    imgSrc: pic,
                    link: 'htts://sanpabloseminary-baguio.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Gif Search',
                    subTitle: 'Search the appropriate expression',
                    imgSrc: pic,
                    link: 'htts://devgrub.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) =>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !==id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems  = (items) =>{
        return items.map(item => {
            return <Card item = {item} click = {(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }
    render(){
        return(
        <Container fluid = {true}>
            <Row className='justify-content-around'>
                {this.makeItems(this.state.items)}
            </Row>

        </Container>
        )
    }
}

export default Carousel;