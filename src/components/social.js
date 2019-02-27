import React, { useState, useCallback } from "react"
import { useTransition, animated } from 'react-spring'


const Social = ({ network }) => {
  const [toggle, set] = useState(false)
  const onHover = useCallback(() => set(state => !state))
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <div className="social-links" onMouseOver={onHover}>
      {transitions.map(({ item, key, props }) => 
        item
          ? <animated.div key={key} style={props}>{ network.name }</animated.div>
          : <animated.div key={key} style={props}>{ network.handle }</animated.div>
  )}
    </div>
  )
};

export default Social;