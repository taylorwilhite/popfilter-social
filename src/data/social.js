import React from "react"
import { animated } from "react-spring"

const SocialLinks = [
  {
    name: 'Instagram',
    handle: '@yourpopfilter',
    link: 'https://www.instagram.com/yourpopfilter/',
    divs: [
      ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>Insta</animated.div>,
      ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>@yourpop</animated.div>,
    ]
  },
  {
    name: 'Twitter',
    handle: '@yourpopfilter',
    link: 'https://twitter.com/yourpopfilter',
  },
  {
    name: 'Youtube',
    handle: 'YourPopFilter',
    link: 'https://www.youtube.com/channel/UC-uru8fAW3gU6zVv4RK5Q9Q',
  },
  {
    name: 'Facebook',
    handle: 'Your Pop Filter Facebook',
    link: 'https://www.instagram.com/yourpopfilter/',
  },
]

export default SocialLinks;