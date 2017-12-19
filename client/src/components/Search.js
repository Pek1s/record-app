import React from 'react';
import {searchArtist, searchAlbum} from '../spotify';
import { Redirect } from 'react-router-dom';

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {value: '', fireRedirect: false};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
    this.setState({ fireRedirect: false })
  }

	handleChange(e) {
    this.setState({ value: e.target.value, fireRedirect: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.value = '';
    searchArtist(this.state.value);
    searchAlbum(this.state.value);
    this.setState({ value: '', fireRedirect: true });
  }
	render() {

		return (
			<div>
				<form className="navbar-form" onSubmit={this.handleSubmit}>
				<div className="form-div">
					<input type="text" className="searchbox" placeholder="Search..." value={this.state.value}
						onChange={this.handleChange} onSubmit={this.handleSubmit}>
					</input>
				</div>
				</form>
				{this.state.fireRedirect && (
					<Redirect to='/search-results' />
	      )}
      </div>
		);
	}
}

export default Search;
