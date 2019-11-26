import React from 'react'
import Source from './Source'

const SourceList = ({ sources }) => {
  return (
    <aside className="source-list">
      {sources.map(source => (
        <Source
          key={`${source.id}_${source.name}_${source.language}`}
          source={source}
        />
      ))}
    </aside>
  )
}

export default SourceList
