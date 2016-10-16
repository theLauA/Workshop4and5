import React from 'react';

export default class Comment extends React.Component {
  render(){
    return (
    <div>
      <div className="media-left media-top">
      PIC
      </div>
      <div classNmae="media-body">
        <a href="#">{this.pros.author}</a> {this.props.children}
        <br /><a href="#"> Like</a> · <a href="#"> Reply</a> ·
          {this.pros.postDate}
        </div>
      </div>
    )
  }
}
