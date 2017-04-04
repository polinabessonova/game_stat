import React, {Component} from 'react'
import Question from './question'
import Result from './result'

export default class Survey extends Component {
  static propTypes = {
    questions: React.PropTypes.array
  }

  static defaultProps = {
    questions: []
  }

  state = {
    result: 0,
    answers: {}
  }

  onAnswer = (value, q, i) => {
    const answers = {
      ...this.state.answers,
      [i]: { age: this.props.questions[ i ][ value ? "whenTrue" : "whenFalse" ] }
    }
    this.setState({
      answers,
      result: Object.values(answers).reduce((a, b) => Math.max(a, b.age), 0)
    })
  }

  render () {
    return (
      <div>
        {this.props.questions.map((q, i) => (
          <Question onAnswer={(value) => this.onAnswer(value, q, i)} {...q}/>
        ))}
        <div>
          <Result result={this.state.result}/>
        </div>
        <div className="text-center" style={{ paddingBottom: 25 }}>
          <button onClick={() => this.setState({ result: 0, answers: {} })}>
            Еще раз!
          </button>
        </div>
      </div>
    )
  }
}
