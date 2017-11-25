import React, {Component} from 'react';

class Article extends Component {
  render() {
    const {summary, imageUrl, header, onClick} = this.props

    return (
      <div className="news-wrapper">
        <div className="img-wrapper col-xs-3">
          <img className="news-img" alt="article img" src={imageUrl}/>
        </div>
        <div className="content-wrapper col-xs-8">
          <div className="news-content">
            <h4>{header}</h4>
            {summary}
            <div style={{color: 'blue', cursor: 'pointer'}} >
              <span onClick={onClick}>Read full article</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article;
