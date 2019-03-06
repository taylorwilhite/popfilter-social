import React, { useState } from "react"
import { useSpring, animated as a } from 'react-spring'
import Responsive from 'react-responsive';


const Social = ({ network }) => {
  const Mobile = props => <Responsive {...props} maxWidth={500} />;
  const Desktop = props => <Responsive {...props} minWidth={501} />;
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div>
      <Mobile>
      <div className="social-links">
        <a class="c social-anchor" target="_blank" rel="noopener noreferrer" href={network.link}>
          <a.div class={"c back " + network.name} style={{ opacity: opacity.interpolate(o => 1 - o), transform }}><i className={network.icon}></i><br></br>{network.podcast ? <p>{network.name}</p> : ''}</a.div>
        </a>
      </div>
      </Mobile>
      <Desktop>
        <div className="social-links" onMouseEnter={() => set(state => !state)} onMouseLeave={() => set(state => !state)}>
          <a class="c social-anchor" target="_blank" rel="noopener noreferrer" href={network.link}>
            <a.div class={"c back " + network.name} style={{ opacity: opacity.interpolate(o => 1 - o), transform }}><i className={network.icon}></i><br></br>{network.podcast ? <p>{network.name}</p> : ''}</a.div>
            <a.div class={"c front-" + network.name} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}><p>{network.handle}</p></a.div>
          </a>
        </div>
      </Desktop>
    </div>
  )
};

export default Social;