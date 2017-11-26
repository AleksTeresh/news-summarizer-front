import React, {Component} from 'react'
import ReactTag from 'react-tag-autocomplete'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from './action-creators'
import * as coreActions from '../core/action-creators'

import AutoTags from './components/AutoTags';
import Article from '../core/components/Article';
import Carousel from '../core/components/Carousel';

export class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    console.log(this.props.search)

    this.props.actions.search.fetchArticles(15, this.props.search.search.tags)
  }

  componentWillMount() {
    const {category} = this.props.match.params;
  }

  render() {
    const {category} = this.props.match.params;
    const {actions, search, allKeyWords} = this.props

    return (
      <div>
        <Carousel category={category} />
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <AutoTags
            styles={{position: 'relative'}}
            onTagAdd={(a) => {
                    actions.search.addTag(a)
                    this.props.actions.search.fetchArticles(15, this.props.search.search.tags.push(a), category)
                }}
            onTagRemove={(i) => {
                  actions.search.removeTag(i)
                  this.props.actions.search.fetchArticles(15, this.props.search.search.tags.remove(i), category)
                }}
            tags={search.search.tags}
            suggestions={allKeyWords.map((p) => ({ id: p.id, name: p.word }))}/>
          <div>
            {
              search.article.articles.map((p, i) => (
                <Article
                  summary={p.summary}
                  header={p.header}
                  imageUrl={p.imageurl}
                  key={i}
                  onClick={() => {this.props.actions.core.openArticleModal(p.content, p.header)}}
                  emotions={p.emotions}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    allKeyWords: state.core.keyWords.keyWords
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      search: bindActionCreators(actionCreators, dispatch),
      core: bindActionCreators(coreActions, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)
