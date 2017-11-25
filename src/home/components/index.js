import React, { Component } from 'react';

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import KeywordCloud from './KeywordCloud'
import {withRouter} from "react-router"
import * as coreActions from '../../core/action-creators'
import * as searchActions from '../../search/action-creators'
import * as homeActions from '../action-creators'
import Article from '../../core/components/Article'

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
    actions.search.addTag({id: keyword.id, name: keyword.value})
    history.push('/search')
  }

  renderArticles() {
    const {articles} = this.props

    return articles.map((article, i) => (
      <Article
        summary={article.content.substr(0, 100)}
        header={article.header}
        imageUrl={article.imageurl}
        key={i}
        onClick={() => {this.props.actions.core.openArticleModal(article.content, article.header)}}
      />
    ))
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
          {this.renderArticles()}
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
    keyWords: state.core.keyWords.keyWords,
    articles: state.home.articles
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
