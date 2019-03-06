import React, { useState } from "react"
import { useSpring, animated as a } from 'react-spring'


const Social = ({ network }) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className="social-links" onMouseEnter={() => set(state => !state)} onMouseLeave={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}><i className={network.icon}></i><br></br>{network.podcast ? `${network.name}` : ''}</a.div>
      <a.div class={"c front-" + network.name} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}><a class="c social-anchor" href={network.link}><p>{network.handle}</p></a></a.div>
    </div>
  )
};

export default Social;