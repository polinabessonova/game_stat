import React, {Component} from 'react'

export default class Result extends Component {
  static propTypes = {}

  static defaultProps = {}

  state = {}

  render () {
    return (
      <div className="result">
        <h1>Результат проверки</h1>
        <p>Минимальный возрастной рейтинг игры - <strong>{this.props.result}</strong> (года) лет</p>
      </div>
    )
  }
}
