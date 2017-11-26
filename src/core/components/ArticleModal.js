import * as React from 'react'
import {Modal} from 'react-bootstrap'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as coreActions from '../action-creators'

class ArticleModal extends React.Component {

  constructor(props) {
    super(props)

    this.close = this.close.bind(this)
  }

  close() {
    this.props.actions.core.closeArticalModal()
  }

  render() {
    const {title, contents, open} = this.props

    return (
      <Modal show={open} onHide={this.close} bsSize="large">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {contents}
        </Modal.Body>
      </Modal>
    )
  }
}

function mapStateToProps (state) {
  return {
    ...state.core.articleModal
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      core: bindActionCreators(coreActions, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleModal)
