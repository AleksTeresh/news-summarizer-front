import * as React from 'react'
import {connect} from "react-redux"
import * as summaryActions from '../action-creators'
import {bindActionCreators} from "redux"
import {FormControl, Button} from 'react-bootstrap'

class SummaryView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    const {value} = this.state
    const {summary, emotions, tags} = this.props

    console.log(value)

    return (
      <div style={{marginTop: '100px'}}>
        <FormControl onChange={(v) => {this.setState({value: v.target.value})}} componentClass="textarea"
                     placeholder="textarea"/>
        <Button onClick={() => {console.log(value); this.props.actions.summary.fetchSummary(value)}}>Summarize</Button>

        <h3>Summary</h3>
        <div>{summary}</div>
        <h3>Emotions</h3>
        <div>{emotions}</div>
        <h3>Tags</h3>
        <div>{tags}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.summary
  }
}

function mapDispatchProps(dispatch) {
  return {
    actions: {
      summary: bindActionCreators(summaryActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(SummaryView)
