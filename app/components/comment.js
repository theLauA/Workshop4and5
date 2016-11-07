import React from 'react';
import {unixTimeToString} from '../util';
import {Link} from 'react-router';
import {likeComment} from '../server';
import {unlikeComment} from '../server';

export default class Comment extends React.Component {

  constructor(props){
    super(props);
    // The FeedItem's initial state is what the Feed passed to us.
    this.state = {
      likeCounter: props.likeCounter
    };
  }

  handleCommentLikeClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      var callbackFunction = (updatedLikeCounter) => {
      this.setState({likeCounter: updatedLikeCounter});
    };
    if (this.didUserLikeComment()) {
      unlikeComment(this.props.threadId, 4, this.props.commentId, callbackFunction);
    } else {
      likeComment(this.props.threadId, 4, this.props.commentId, callbackFunction);
    }
  }
}
  didUserLikeComment() {
    var likeCounter = this.state.likeCounter;
    var liked = false;
    for (var i = 0; i < likeCounter.length; i++) {
      if (likeCounter[i]._id === 4) {
        liked = true;
        break;
      }
    }
    return liked;
  }

  render(){

    var likeButtonText = "Like";
    if (this.didUserLikeComment()) {
      likeButtonText = "Unlike";
    }

    var likedCount = this.state.likeCounter.length + " Liked";
    if (this.state.likeCounter.length == 0){
      likedCount = "";
    }


    return (
    <div>
      <div className="media-left media-top">
      PIC
      </div>
      <div className="media-body">
        <Link to={"/profile/" + this.props.author._id}>
          {this.props.author.fullName}
        </Link>
        {this.props.children}
        <br /><a href="#" onClick={(e) => this.handleCommentLikeClick(e)}>
          {likeButtonText}</a> · <a href="#"> Reply</a> · <a href="#">{likedCount}</a> ·
          {unixTimeToString(this.props.postDate)}
        </div>
      </div>
    )
  }
}
