import React from 'react'
import PropTypes from 'prop-types'

const ShareIcon = ({fill, width, height, dataId}) => {
  const pathFill = fill ? fill : '#21242c'

  return (
    <svg
      data-id={dataId}
      width={width ? width : 19}
      height={height ? height : 20}
      viewBox='0 0 19 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.16667 13.3327C1.39333 13.3327 0 11.866 0 9.99935C0 8.13268 1.39333 6.66602 3.16667 6.66602C4.94 6.66602 6.33333 8.13268 6.33333 9.99935C6.33333 11.866 4.94 13.3327 3.16667 13.3327ZM3.16667 7.99935C2.09 7.99935 1.26667 8.86602 1.26667 9.99935C1.26667 11.1327 2.09 11.9993 3.16667 11.9993C4.24333 11.9993 5.06667 11.1327 5.06667 9.99935C5.06667 8.86602 4.24333 7.99935 3.16667 7.99935Z'
        fill={pathFill}
      />
      <path
        d='M15.8327 6.66667C14.0593 6.66667 12.666 5.2 12.666 3.33333C12.666 1.46667 14.0593 0 15.8327 0C17.606 0 18.9993 1.46667 18.9993 3.33333C18.9993 5.2 17.606 6.66667 15.8327 6.66667ZM15.8327 1.33333C14.756 1.33333 13.9327 2.2 13.9327 3.33333C13.9327 4.46667 14.756 5.33333 15.8327 5.33333C16.9093 5.33333 17.7327 4.46667 17.7327 3.33333C17.7327 2.2 16.9093 1.33333 15.8327 1.33333Z'
        fill={pathFill}
      />
      <path
        d='M15.8327 20.0007C14.0593 20.0007 12.666 18.534 12.666 16.6673C12.666 14.8007 14.0593 13.334 15.8327 13.334C17.606 13.334 18.9993 14.8007 18.9993 16.6673C18.9993 18.534 17.606 20.0007 15.8327 20.0007ZM15.8327 14.6673C14.756 14.6673 13.9327 15.534 13.9327 16.6673C13.9327 17.8007 14.756 18.6673 15.8327 18.6673C16.9093 18.6673 17.7327 17.8007 17.7327 16.6673C17.7327 15.534 16.9093 14.6673 15.8327 14.6673Z'
        fill={pathFill}
      />
      <path
        d='M5.70551 10.5898L13.8628 14.8832L13.296 16.0752L5.13867 11.7818L5.70551 10.5898Z'
        fill={pathFill}
      />
      <path
        d='M13.296 3.92383L13.8622 5.11716L5.70487 9.40916L5.13867 8.21583L13.296 3.92383Z'
        fill={pathFill}
      />
    </svg>
  )
}

ShareIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  dataId: PropTypes.string,
}

export default ShareIcon