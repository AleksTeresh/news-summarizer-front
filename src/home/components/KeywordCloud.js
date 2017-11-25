import { TagCloud } from 'react-tagcloud';
import * as React from 'react'

const tagStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5%",
  marginBottom: "5%",
  width: "80%"
}

const KeywordCloud = ({data, onTagSelect}) => {

  const customRenderer = (tag, size, color) => (
    <span key={tag.value}
          style={{
                    fontSize: `${size}px`,
                    margin: '3px',
                    padding: '3px',
                    display: 'inline-block',
                    color: `${color}`,
                  }}>{tag.value}</span>
  )

  return (
    <TagCloud className="text-center"
              style={tagStyle}
              minSize={12}
              maxSize={35}
              tags={data}
              onClick={onTagSelect}
              renderer={customRenderer} />
  )
}

export default KeywordCloud