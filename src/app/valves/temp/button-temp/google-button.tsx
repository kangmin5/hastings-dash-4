import React from 'react';
import Image from "next/image";
import google from "assets/development/common/icons/ico-google.svg";

export function GoogleButton  (props: any) {
  const handleClick = React.useCallback(() => {
    alert("kakao button is clicked");
}, []);

  return (
    <button>
    <Image src={google} alt="" />
      <span>{props.title}</span>
    </button>

  );
}
