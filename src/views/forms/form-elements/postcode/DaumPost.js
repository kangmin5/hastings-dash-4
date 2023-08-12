// DaumPost.js

import React from 'react'
import DaumPostcode from 'react-daum-postcode'

export default function DaumPost({ onClose }) {
  const selectAddress = data => {
    // console.log(`주소: ${data.address} (${data.zonecode})`)
    onClose(`${data.address}`)
  }

  return <DaumPostcode onComplete={selectAddress} autoClose={false} />

  // return <DaumPostcode onComplete={selectAddress} autoClose={false} defaultQuery='판교역로 235' />
}
