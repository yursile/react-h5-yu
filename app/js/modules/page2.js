import React from "react";

import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import SplitButton from 'react-bootstrap/lib/SplitButton'

var SPage = React.createClass({
	
	render(){
		const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
		var _this = this;
		return (
			<ButtonToolbar className="he" style={{height:300}}>{BUTTONS.map(_this.renderDropdownButton)}</ButtonToolbar>
		);
	},
	renderDropdownButton(title, i) {

	  return (
	    <SplitButton bsStyle={title.toLowerCase()}  title={title} key={i} id={`split-button-basic-${i}`}>
	      <MenuItem eventKey="1">Action</MenuItem>
	      <MenuItem eventKey="2">Another action</MenuItem>
	      <MenuItem eventKey="3">Something else here</MenuItem>
	      <MenuItem divider />
	      <MenuItem eventKey="4">Separated link</MenuItem>
	    </SplitButton>
	  );
	}
});

export {SPage as default }