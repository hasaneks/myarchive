import * as React from 'react'

function SvgCategory(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#category_svg__clip0)">
        <path
          d="M220 0H20C8.953 0 0 8.953 0 20v200c0 11.047 8.953 20 20 20h200c11.047 0 20-8.953 20-20V20c0-11.047-8.953-20-20-20zm-20 200H40V40h160v160zm299.656 73.523a20.002 20.002 0 00-21.797 4.332l-200 200a19.998 19.998 0 00-4.336 21.797A19.997 19.997 0 00292 512h200c11.047 0 20-8.953 20-20V292c0-8.09-4.871-15.383-12.344-18.477zM472 472H340.285L472 340.285V472zm-80-232c66.168 0 120-53.832 120-120S458.168 0 392 0 272 53.832 272 120s53.832 120 120 120zm0-200c44.113 0 80 35.887 80 80s-35.887 80-80 80-80-35.887-80-80 35.887-80 80-80zM234.141 306.145L148.285 392l85.856 85.855c7.812 7.813 7.812 20.477 0 28.286-7.809 7.808-20.473 7.812-28.282 0L120 420.285l-85.86 85.86c-7.808 7.808-20.472 7.808-28.28 0-7.813-7.813-7.813-20.477 0-28.286L91.714 392 5.859 306.145c-7.812-7.813-7.812-20.477 0-28.286 7.809-7.812 20.473-7.812 28.282 0L120 363.715l85.859-85.86c7.809-7.808 20.473-7.808 28.282 0 7.812 7.813 7.812 20.477 0 28.29z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="category_svg__clip0">
          <path fill="currentColor" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgCategory