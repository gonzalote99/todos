import React from 'react'


function List() {
    const nas = ['lo','se', 'tek']
    return (
        <div>
      {
          nas.map(na => <h2>{na}</h2>)
      }
    </div>
    )
}

export default List