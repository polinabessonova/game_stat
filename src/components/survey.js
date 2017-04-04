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
    currentQuestionIdx: 0
  }

  onAnswer = (value) => {
    this.setState({
      currentQuestionIdx: this.state.currentQuestionIdx + 1,
      result: Math.max(this.props.questions[ this.state.currentQuestionIdx ][ value ? 'whenTrue' : 'whenFalse' ], this.state.result)
    })
  }

  render () {
    if (this.props.questions.length == this.state.currentQuestionIdx) {
      return (
        <div>
          <div>
            <Result result={this.state.result}/>
          </div>
          <div>
            <button onClick={() => this.setState({ currentQuestionIdx: 0, result: 0 })}>Еще раз</button>
          </div>
        </div>
      )
    } else {
      return (
        <Question onAnswer={this.onAnswer} {...this.props.questions[ this.state.currentQuestionIdx ]}/>
      )
    }
  }
}
