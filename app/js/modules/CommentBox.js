let React = require('react');
let Comments = require('./Comments.js');
let Pagination = require("./Pagination.js");


var data = [
  {author: "Pete Hunt1", text: "This is one comment"},
  {author: "Jordan Walke2", text: "This is *another* comment"},
  {author: "Pete Hunt3", text: "This is one comment"},
  {author: "Jordan Walke4", text: "This is *another* comment"},
  {author: "Pete Hunt5", text: "This is one comment"},
  {author: "Jordan Walke6", text: "This is *another* comment"}
];


module.exports = React.createClass({
	render(){
		return(
			<div className="commentBox">
			  <Comments ref="comments" data={this.state.currentData}/>
              <Pagination ref="pagination" num={3} handleChange={this.handleChange} />
            </div>
		)
	},
	handleChange(i){
	    var currentData = data.slice(i*2,i*2+2);
	    this.refs.comments.setState({data:currentData});
    },

	getInitialState(){
	    return{
	      currentData:data.slice(0,2),
	      page:0
	    }
	},

	componentWillReceiveProps(props){
	 	console.log("prop: "+ props);
	}
});
