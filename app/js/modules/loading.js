var React = require('react');
var Loader = require('preload-ad');
var Adv = require("ad-ydgf");
var allImgs = [
              'http://192.168.0.9:8080/img/01.jpg',
              
              ];
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/1.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/2.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/3.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/4.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/5.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/6.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/7.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/8.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/9.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/10.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/11.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/mayer.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/number.png',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/1.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/bg.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/icons.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n1.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n2.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n3.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n4.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n5.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n6.jpg',
              // 'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n7.jpg'
var option = {
    Itemspaceid:12862, //广告ID
    adps:6401136,// 广告位尺寸
    adsrc:13,//广告来源,13移动端
    apt:4,//广告来源,手搜
    maxPic:6, //轮换的最大图片数
    turn:2, //访问该广告第几张图
    isTurn:true //是否开启广告图片访问轮转,开启后turn自动失效
  }
new Adv(option).getAD();
module.exports = React.createClass({
  getInitialState:function(){
    return{
      progress:'0%',
      show:true
    }
  },
  componentDidMount:function(){
    let _this = this,
    loader = new Loader({
      resources: allImgs,
      ad:true,
      adTime:3000,
      onStart: function(total) {},
      onProgress: function(current, total) {
        var percent = parseInt(current / total * 100) + '%';
        _this.setState({
          progress:percent
        });
      },
      onComplete: function(total) {
        _this.props.onComplete();
        _this.setState({
          show:false
        });
      }
    });
   
    loader.start();

  },
  render:function(){
    let style = {display:this.state.show?'block':'none'};
    return(
      <div className="loading" style={style}>
        <div className="pace">
          <div className="pace-progress">
            {this.state.progress}
          </div>
        </div>
      </div>
    )
  }
});
