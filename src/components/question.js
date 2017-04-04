import React, {Component} from 'react'

export default class Question extends Component {
  static propTypes = {}

  static defaultProps = {}

  state = {}

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className='question-number'>Вопрос №{this.props.number}</h1>
          </div>
          <div className="col-md-12">
            <p className='question-text'>{this.props.text}</p>
          </div>
          <div className="col-md-6 text-center">
            <button onClick={() => this.props.onAnswer(true)}>
              Да
            </button>
          </div>
          <div className="col-md-6 text-center">
            <button onClick={() => this.props.onAnswer(false)}>
              Нет
            </button>
          </div>
        </div>
      </div>
    )
  }
}
