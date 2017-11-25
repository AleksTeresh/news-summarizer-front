import React, { Component } from 'react';

class Article extends Component {
    renderArticle () {
        let i = 0;
        return (
            <div>
            {
              this.props.articles.map((p, i) => (
                <div key={i} className="news-wrapper">
                    <div className="img-wrapper col-xs-3">
                        <img className="news-img" alt="article img" src="p.imageUrl" />
                    </div>
                    <div className="content-wrapper col-xs-8">
                        <div className="news-content">
                          {p.summary}
                        </div>
                    </div>
                </div>
              ))
            }
            </div>
        )
    }

    render () {
      return (
          <div className="article-wrapper">
              {this.renderArticle()}
          </div>
      )
    }
}

export default Article;
