import React, { Component } from 'react';

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import KeywordCloud from './KeywordCloud'
import {withRouter} from "react-router"
import * as coreActions from '../../core/action-creators'
import * as searchActions from '../../search/action-creators'
import * as homeActions from '../action-creators'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.handleKeywordCloudTagSelect = this.handleKeywordCloudTagSelect.bind(this)
  }

  componentDidMount() {
    this.props.actions.home.fetchArticles(10)
  }

  handleKeywordCloudTagSelect(keyword) {
    const {history, actions} = this.props

    actions.search.clearTags()
    actions.search.addTag(keyword.value)
    history.push('/search')
  }

  renderArticle() {
    let i = 0;
    return (
      <div>
        <div key={i++} className="news-wrapper">
          <div className="img-wrapper col-xs-3">
            <img className="news-img" alt="article img" src="../../../src/static/img/tracer-wallpaper-wide.jpg" />
          </div>
          <div className="content-wrapper col-xs-8">
            <div className="news-content">
            </div>
          </div>
        </div>
        <div key={i++} className="news-wrapper">
          <div className="img-wrapper col-xs-3">
            <img className="news-img" alt="article img" src="../../../src/static/img/tracer-wallpaper-wide.jpg" />
          </div>
          <div className="content-wrapper col-xs-8">
            <div className="news-content">
              <p>dfasdfasdfdsfadsfkamsdkfmaskdfmaksdfmkadsmfkeam kamefi ajif jaei fai jfia ejifa eifaji iaj fi</p>
            </div>
          </div>
        </div>
        <div key={i++} className="news-wrapper">
          <div className="img-wrapper col-xs-3">
            <img className="news-img" alt="article img" src="../../../src/static/img/tracer-wallpaper-wide.jpg" />
          </div>
          <div className="content-wrapper col-xs-8">
            <div className="news-content">
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const {keyWords} = this.props

    const keywordCloudData = keyWords.map(({weight, word, id}) => ({
      value: word,
      count: weight,
      id
    })).toArray()

    return (
      <div>
        <KeywordCloud
          data={keywordCloudData}
          onTagSelect={this.handleKeywordCloudTagSelect}
        />
        <div className="col-md-12 pull-left">
          {this.renderArticle()}
        </div>
        {/*<div className="col-md-3">*/}
          {/*<ul className="list-group">Global*/}
            {/*<li className="list-group-item">HeadLine</li>*/}
            {/*<li className="list-group-item">HeadLine</li>*/}
            {/*<li className="list-group-item">HeadLine</li>*/}
            {/*<li className="list-group-item">HeadLine</li>*/}
            {/*<li className="list-group-item">HeadLine</li>*/}
            {/*<li className="list-group-item">HeadLine</li>*/}
            {/*<li className="list-group-item">HeadLine</li>*/}
          {/*</ul>*/}
        {/*</div>*/}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    keyWords: state.core.keyWords.keyWords
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      core: bindActionCreators(coreActions, dispatch),
      search: bindActionCreators(searchActions, dispatch),
      home: bindActionCreators(homeActions, dispatch)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
