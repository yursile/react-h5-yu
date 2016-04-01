var React = require('react');
var Page1 = require("./page1.js");
var Page3 = require("./CommentBox.js");
var Swiper = require("swiper");
var Pagination = require("./Pagination.js");
import Button from 'react-bootstrap/lib/Button';
import Page2 from './page2.js';
import LastPage from "./ShareComponent.js";


var App = React.createClass({
  render:function(){
    return(
      <div className="main">
       <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><Page1 ref="page1" autoplay={true} /></div>
            <div className="swiper-slide"><Page2 /></div>
            <div className="swiper-slide"><Page3 /></div>
            <div className="swiper-slide"><LastPage /></div>
          </div>
       </div>
      </div>
    )
  },
  onComplete(){
    console.log("ok");
  },
  componentDidMount(){
    var _this =this;
    var mySwiper = new Swiper('.swiper-container', {
     direction : 'vertical',
     onSlideChangeEnd:function(swiper){
      if(swiper.activeIndex!=0&&_this.refs.page1.state.autoplay){
        _this.refs.page1.setState({autoplay:false});
         console.log(swiper.activeIndex);
      }
     }
    })
  }
});


export {App as default}




