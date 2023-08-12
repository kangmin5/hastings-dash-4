import React from 'react';
import Button from "@mui/material/Button";
import { useKakaoButton } from './kakao-button-hook';   
import Image from "next/image";
import naver from "assets/development/common/icons/ico-naver.svg";

export function NaverButton  (props: any) {
    const { handleClick } = useKakaoButton();

  return (
    <button>
    <Image src={naver} alt="" />
      <span>{props.title}</span>
    </button>

  );
}