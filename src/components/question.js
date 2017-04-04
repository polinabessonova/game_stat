import React, {Component} from 'react'

export default class Question extends Component {
  static propTypes = {}

  static defaultProps = {}

  state = {}

  render () {
    return (
      <div className="question-wrap">
        <h1 className='question-number'>Вопрос №{this.props.number}</h1>
        <p className='question-text'>{this.props.text}</p>
        <button className="question-answer-yes" onClick={() => this.props.onAnswer(true)}>
          Да
        </button>
        <button className="question-answer-no" onClick={() => this.props.onAnswer(false)}>
          Нет
        </button>
      </div>
    )
  }
}
