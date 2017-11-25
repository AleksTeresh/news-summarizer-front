import React, {Component} from 'react';

class Article extends Component {
  render() {
    const {summary, imageUrl, header, key} = this.props

    return (
      <div key={key} className="news-wrapper">
        <div className="img-wrapper col-xs-3">
          <img className="news-img" alt="article img" src={imageUrl}/>
        </div>
        <div className="content-wrapper col-xs-8">
          <div className="news-content">
            <h4>{header}</h4>
            {summary}
          </div>
        </div>
      </div>
    )
  }
}

export default Article;
