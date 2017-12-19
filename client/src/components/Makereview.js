import React, { Component } from 'react';
import axios from 'axios';
import { store } from '../store.js';
export default class Reviews extends Component {

  constructor(props){
    super(props);
    this.state = {review: " "};
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  handleChange(e) {
    store.dispatch({type: "WRITE_REVIEW", field: "writereview", payload: {user: localStorage.getItem("username"), review: e.target.value}});
  }

  handleReturn() {
    store.dispatch({type: "CHANGE_REDIRECT", field: "redirectbutton", payload: "false"});
  }

 onSubmit(e) {
   e.preventDefault();
   store.dispatch({type: "CHANGE_REDIRECT", field: "redirectbutton", payload: "false"});
   axios.post('/test-token',
   {token: localStorage.getItem("token")})
   .then((response) => {

     axios.post('/secure/reviews/save-review',{
       user_id: response.data.userid,
       artist_name: this.props.state.artistname,
       album_name: this.props.state.albumname,
       spotify_artist_id: this.props.state.artistid,
       spotify_album_id: this.props.state.albumid,
       review_text: store.getState().writereview.review
     },
     {headers: {token: localStorage.getItem("token")}}
     )
     .then((res) => {
       store.dispatch({type: "WRITE_REVIEW", field: "writereview", payload: {user: localStorage.getItem("username"), review: ""}});
       store.dispatch((dispatch) => {
         axios.get('/reviews/album/' + this.props.state.albumid)
         .then((resp) => {
           dispatch({type: "LOAD_REVIEWS", field: "reviews", payload: resp.data});
         })
       })
     })
   })



  }
  render(){
    return (
      <div className="user-review-container">
        <form className="user-review-form col-lg-12" onSubmit={this.onSubmit}>
          <h2>Please write your review to box below</h2>
          <h3>To submit your review press "Submit" button</h3>
          <textarea className="user-input" rows="4" cols="50" name="comment" value={store.getState().writereview.review}
            onChange={this.handleChange} onSubmit={this.handleSubmit}>
          </textarea>
          <div className="form-button-div">
            <input id="apply-review-button" type="submit" value="Submit"/>
            <button id="cancel-review-button" onClick={this.handleReturn}>Cancel</button>
          </div>
      </form>

</div>
    );
  }
}
