import React,{Component} from 'react';
import {connect} from 'react-redux';
import Autosuggest from 'react-autosuggest';

function getSuggestionValue(suggestion) {
  return suggestion.todo;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.todo}</span>
  );
}

class SearchTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested ({ value }){
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  };

  getSuggestions(value) {
    const escapedValue = value.trim();
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    return this.props.todos.filter(todos => regex.test(todos.todo));
  }
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange,
      placeholder: 'Enter todo'
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}
function mapStateToProps(state){
  console.log(state.todo.todoList);
  return{
    todos:state.todo.todoList
  }
}

export default connect(mapStateToProps)(SearchTodo);
