import React, { Component } from 'react';

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { bindActionCreators } from "redux"

import KeywordCloud from './KeywordCloud'
import { withRouter } from "react-router"
import * as coreActions from '../../core/action-creators'
import * as searchActions from '../../search/action-creators'
import * as homeActions from '../action-creators'
import { TagCloud } from 'react-tagcloud';
import Article from '../../core/components/Article'
import Carousel from '../../core/components/Carousel'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.handleKeywordCloudTagSelect = this.handleKeywordCloudTagSelect.bind(this)
  }

  componentDidMount() {
    this.props.actions.home.fetchArticles(10)
  }

  handleKeywordCloudTagSelect(keyword) {
    const { history, actions } = this.props

    actions.search.clearTags()
    actions.search.addTag({ id: keyword.id, name: keyword.value })
    history.push('/search')
  }
  renderArticles() {
    const { articles } = this.props

    return articles.map((article, i) => (
      <Article
        summary={article.summary}
        header={article.header}
        imageUrl={article.imageurl}
        key={i}
        onClick={() => {this.props.actions.core.openArticleModal(article.content, article.header)}}
        emotions={article.emotions}
      />
    ))
  }
  render() {
    const { keyWords } = this.props
    const { articles } = this.props
    const keywordCloudData = keyWords.map(({ weight, word, id }) => ({
      value: word,
      count: weight,
      id
    })).toArray()

    return (
      <div>
        <Carousel />
        <h2 className="text-center tag-ment">You might be interested!</h2>
        <KeywordCloud className="text-center tag-cloud"
          data={keywordCloudData}
          onTagSelect={this.handleKeywordCloudTagSelect}
        />
        <div className="home-content-wrapper">
          <div className="col-md-8 pull-left home-content">
            {this.renderArticles()}
          </div>
          <div className="col-md-4 ">
            <label>Global</label>
            <ul className="list-group">
              <Link className="list-group-item" to="/">HeadLine<span className="badge">1</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">2</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">3</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">4</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">5</span></Link>
            </ul>
          </div>
          <div className="col-md-4 ">
            <label>Trend</label>
            <ul className="list-group">
              <Link className="list-group-item" to="/">HeadLine<span className="badge">1</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">2</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">3</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">4</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">5</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">6</span></Link>
              <Link className="list-group-item" to="/">HeadLine<span className="badge">7</span></Link>
            </ul>
          </div>
        </div>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      core: bindActionCreators(coreActions, dispatch),
      search: bindActionCreators(searchActions, dispatch),
      home: bindActionCreators(homeActions, dispatch)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
