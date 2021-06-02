import * as React from 'react'

function SvgWatch(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#watch_svg__clip0)" fill="currentColor">
        <path d="M191.935 0v42.667h42.667V64c14.933-2.133 27.733-2.133 42.667 0V42.667h42.667V0H191.935z" />
        <path d="M401.002 140.8l14.933-14.933 17.067 17.067 29.867-29.867-64-64-29.867 29.867L386.069 96l-19.2 19.2c-102.4-61.867-234.667-29.867-294.4 72.533-59.733 102.4-27.734 230.4 72.533 292.267 100.267 61.867 232.533 29.867 292.267-72.533 53.333-87.467 38.4-198.4-36.267-266.667zM255.935 445.867c-83.2 0-149.333-66.133-149.333-149.333S172.735 147.2 255.935 147.2v149.333h149.333c.001 83.2-66.133 149.334-149.333 149.334z" />
      </g>
      <defs>
        <clipPath id="watch_svg__clip0">
          <path fill="currentColor" d="M0 0h511.478v511.478H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgWatch
