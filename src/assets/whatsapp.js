import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect width={40} height={40} fill="#372F62" rx={20} />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M23.009 21.323c-.166-.082-.978-.481-1.129-.537-.15-.055-.26-.082-.371.084-.11.164-.426.536-.523.646-.096.11-.192.124-.357.042-.165-.083-.698-.257-1.328-.82a4.967 4.967 0 0 1-.918-1.143c-.097-.165-.011-.255.072-.337.074-.074.165-.193.248-.289.082-.097.11-.166.165-.276.055-.11.027-.206-.014-.289-.041-.083-.371-.895-.51-1.226-.133-.322-.27-.278-.37-.283a7.216 7.216 0 0 0-.317-.006.605.605 0 0 0-.44.207c-.152.165-.578.564-.578 1.377 0 .812.591 1.597.674 1.708.083.11 1.164 1.777 2.82 2.492.395.17.702.272.941.348.396.126.756.108 1.04.065.317-.047.977-.4 1.115-.785.137-.385.137-.716.096-.785-.041-.069-.151-.11-.317-.192Zm-3.013 4.113h-.002c-.983 0-1.949-.264-2.795-.765l-.2-.12-2.08.546.556-2.026-.13-.208a5.478 5.478 0 0 1-.84-2.922 5.5 5.5 0 0 1 5.494-5.491c1.466 0 2.845.572 3.882 1.61a5.46 5.46 0 0 1 1.607 3.885 5.5 5.5 0 0 1-5.492 5.491Zm4.674-10.165a6.563 6.563 0 0 0-4.674-1.938c-3.641 0-6.606 2.964-6.607 6.607a6.591 6.591 0 0 0 .882 3.303l-.937 3.424 3.502-.92a6.6 6.6 0 0 0 3.158.805h.002c3.642 0 6.606-2.963 6.607-6.607a6.568 6.568 0 0 0-1.933-4.674Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M12 12h16v16H12z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent