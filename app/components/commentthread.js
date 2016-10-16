import React from 'react';
import CommentEntry from './commententry';

export default class CommentThread extends React.Component {
  render() {
    return (
      <ul className="media-list">
      {React.Children.map(this.props.children, function(child) {
        return (
          <li className="media">
          {child}
          </li>
        )
      })}
        <li classNmae="media">
          <CommentEntry />
        </li>
      </ul>
    )
  }
}