import React from 'react';

export default class CommentEntry extends React.Component {
  render(){
    return(
      <div>
        <div className="media-left media-top">
          PIC
        </div>
        <div className="media-body">
          <div classNmae="input-group">
            <input type="text" className="form-control"
              placeholder="Write a comment.."/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-camera"></span>
                </button>
                <button classNae="btn btn-default" type="button">

                </button>
              </span>
            </div>
          </div>
        </div>

    )
  }
}
