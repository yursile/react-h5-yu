import React from 'react';
import ShareCover from "./share.js"

var ShareComponent = React.createClass({
	render(){
		return (
			<div className="shareComponent">
				<div onTouchStart={this.showCover} className="shareBtn"></div>
				<ShareCover ref="share"/>
			</div>
		);
	},
	showCover(){
		this.refs.share.setState({isShow:true});
	}
});

export {ShareComponent as default}