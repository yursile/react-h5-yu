import React from 'react';
import ShareCover from "./share.js"

var ShareComponent = React.createClass({
	render(){
		return (
			<div className="shareComponent">
				<div onTouchStart={this.showCover} className="shareBtn"></div>
				<div className="authors"></div>
				<div className="ewm" onTouchStart={this.stopPropagation}></div>
				<ShareCover ref="share"/>
			</div>
		);
	},
	showCover(e){
		e.preventDefault();
		e.stopPropagation();
		this.refs.share.setState({isShow:true});
	}
});

export {ShareComponent as default}