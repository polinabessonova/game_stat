import React from 'react';
import ReactDOM from 'react-dom';
import Survey from './components/survey';
import questions from './questions.js'

const rootEl = document.getElementById('container');

ReactDOM.render(<Survey questions={questions}/>, rootEl);
