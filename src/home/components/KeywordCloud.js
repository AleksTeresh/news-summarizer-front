import { TagCloud } from 'react-tagcloud';
import * as React from 'react'


const KeywordCloud = ({ data, onTagSelect }) => {
  const currentWidth = window.innerWidth;
  let minSize = 12;
  let maxSize = 35;
  
  if (currentWidth < 768){
    minSize = 8;
    maxSize = 18;
  }
  const customRenderer = (tag, size, color) => (
    <span key={tag.value}
      style={{
        fontSize: `${size}px`,
        marginLeft: '20px',
        padding: '3px',
        display: 'inline-block',
        color: `${color}`,
      }}>{tag.value}</span>
  )

  return (
    <TagCloud
      minSize={minSize}
      maxSize={maxSize}
      tags={data}
      onClick={onTagSelect}
      renderer={customRenderer} />
  )
}

export default KeywordCloud