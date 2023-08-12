import React from 'react';
import Link from "next/link";

export function OkLink  (props: any) {

  return (
    <Link href={props.path}>
    {props.title}
  </Link>

  );
}
