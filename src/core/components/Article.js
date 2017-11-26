import React, {Component} from 'react';

class Article extends Component {
  render() {

    const {summary, imageUrl, header, onClick, emotions} = this.props

    return (
      <div className="news-wrapper">
        <h4 className="news-header"><strong>{header}</strong></h4>
        <div className="img-wrapper col-xs-4">
          <img className="news-img" alt="article img" src={imageUrl}/>
        </div>
        <div className="content-wrapper col-xs-7">
          <div className="news-content">
            {summary}
            <div style={{color: 'blue', cursor: 'pointer'}}>
              <span onClick={onClick}>Read full article</span>
            </div>
            <div>Emotions: {emotions}</div>
          </div>

        </div>
        <div className="divisionLine"/>
      </div>
    )
  }
}

export default Article;
