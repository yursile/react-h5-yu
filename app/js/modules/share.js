import React from 'react'
import ClassNames from 'classNames'

var ShareCover = React.createClass({
	hideCover(){
		this.setState({
	      isShow:false
	    })
	},
	stopPropagation(e){
		e.stopPropagation();
	},
	getInitialState(){
	    return{
	      isShow:false
	    }
    },
	render(){
		// var isShow = {zIndex:this.state.isShow?'10000':'-1'};
		var isShow = {display:this.state.isShow?"block":"none"}
		var cx = ClassNames;
		var classes = cx({
			'shareCover':true, 
			'fanimated':true, 
			'bounceInDown':this.state.isShow
		});
		let shareCover = (
			<div className={classes} style={isShow}  onTouchStart={this.hideCover}>
				<div className="authors"></div>
				<div className="ewm" onTouchStart={this.stopPropagation}></div>
			</div>
		)
		return shareCover;
	}
});

export {ShareCover as default}