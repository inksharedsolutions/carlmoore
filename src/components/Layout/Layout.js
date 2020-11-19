import React from "react"

export default ({ children, location }) => (<div>{location.pathname}{children}</div>)