
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: require("../../img/1.jpg"),
    altText: 'Sli1',
    caption: 'Slide 1'
  },
  {
    src: require('../../img/2.jpg'),
    altText: 'Sli2',
    caption: 'Slide 2'
  },
  {
    src: require('../../img/3.jpg'),
    altText: 'Sl 3',
    caption: 'Slide 3'
  }
]; 

class Tv10 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 1 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" height="750px"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Tv10;




















// import React from "react";
// import {useState} from 'react'
// //import axios from "axios";
// import {useDispatch} from 'react-redux'
// import { } from "../../C_actions";


// export default function SearchBar(){
// const [search, setSearch] = useState ('')
// let dispatch = useDispatch()
 
// function onSubmit(e){
//     e.preventDefault();
// dispatch((search))
// }

// function onInputChange(e){
//     e.preventDefault();
//     setSearch(e.target.value)
    
// }
//     return <>
//         <form onSubmit={onSubmit}>
//         <input type="text" onChange={onInputChange} value={search}/>
//         <input type="submit" value="Buscar" />
//         </form>
//     </>
// }