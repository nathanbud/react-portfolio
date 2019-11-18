import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import Content from '../components/Content';

const About = (props) =>{
    return(
      <div>
          <Hero title = {props.title}/>
          <Content>
             <p>Hi!, I' am Nathaniel. I' am a front end developer.   </p>
             <p>My dream is to start my own business and become an entrepreneur (currently working on some ideas).  </p>
             <p>Im constantly learning new things. Currently those things include gaining more experience with React, Express JS, Node JS, and MongoDB</p>
          </Content>
      </div>
            

    )
}

export default About;