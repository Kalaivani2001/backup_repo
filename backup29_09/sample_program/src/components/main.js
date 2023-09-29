import React from 'react'
import {Helmet} from "react-helmet";

function Main() {
  return (
    <div>
         <Helmet>
        <title>react</title>
        <meta name="description" content={"Admin Content" } />
    </Helmet>
      <p>Welcome</p>
    </div>
  )
}

export default Main
