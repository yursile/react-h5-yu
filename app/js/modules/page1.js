import React from "react";
import Slider from 'react-slick';

var Page1;
module.exports = Page1 = React.createClass({
	render: function () {
	    var settings = {
	      dots: true,
	      centerMode:true,
	      autoplay:this.state.autoplay,
	      
	      // variableWidth:true
	    }
	    // var settings = this.state.settings;
	    return (
	      <div className='container'>
	        <Slider {...settings}>
	          <img src='./public/img/01.jpg' />
	          <img src='./public/img/02.jpg' />
	          <img src='./public/img/03.jpg' />
	        </Slider>
	      </div>
	    );
    },
    getInitialState(){
    	return{
		      autoplay:this.props.autoplay
    	}
    },
    // component
});

export{Page1 as default}