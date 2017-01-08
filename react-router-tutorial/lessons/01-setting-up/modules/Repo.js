import React from 'react'
import {Link} from 'react-router';

export default React.createClass({
	render() {
		return  (
			<div>
				<h2>{this.props.params.repoName}</h2>
				<h4>it is single page of repo</h4>


			</div>
		);
	}
})

