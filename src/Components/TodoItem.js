import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
//import './App.css';

class TodoItem extends Component {

  render() {
    return (
      <li className="TodoItem">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem;
