import React, { memo } from 'react'

const Home = (props) => {
    console.log('vai isko rendering mat koro', props.data);
  return (
    <div>
        <h1>This is a home Componenet</h1>
    </div>
  )
}

export default memo(Home) 