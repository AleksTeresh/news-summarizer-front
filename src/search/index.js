import React, { Component } from 'react'
import ReactTag from 'react-tag-autocomplete'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from './action-creators'

import AutoTags from './components/AutoTags';
import Article from '../core/components/Article';
import Carousel from '../core/components/Carousel';

export class SearchPage extends Component {
  constructor(props){
      super(props);

      this.state={

      }
  }
  componentWillMount(){
      const { category } = this.props.match.params;
  }
  render() {
      const { category } = this.props.match.params;
      return (
          <div>
          <Carousel category={category} />
          <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
              <AutoTags />
              <Article articles={this.props.search.article.articles} />
          </div>
          </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    search: state.search
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      search: bindActionCreators(actionCreators, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)
