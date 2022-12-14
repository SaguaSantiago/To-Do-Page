import * as React from "react"

const PenIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.264 2.293a1 1 0 0 0-1.415 0l-.872.872a3.001 3.001 0 0 0-3.415.587L4.955 14.358l5.657 5.657L21.22 9.408c.924-.923 1.119-2.3.586-3.414l.873-.873a1 1 0 0 0 0-1.414l-1.415-1.414Zm-4.268 8.51-6.384 6.384-2.828-2.829 6.383-6.383 2.829 2.829Zm1.818-1.818.99-.99a1 1 0 0 0 0-1.415l-1.413-1.414a1 1 0 0 0-1.415 0l-.99.99 2.828 2.83Z"
      fill="currentColor"
    />
    <path d="m2 22.95 2.122-7.778 5.656 5.657L2 22.95Z" fill="currentColor" />
  </svg>
)

export default PenIcon
