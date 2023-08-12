import React from 'react';
import Button from "@mui/material/Button";
export function QueryButton  (props: any) {
  const {title, onClick, icon, className} = props
  return (
  <Button size="medium" color="primary" variant="contained" 
  className={className === "" ? "" : className}
  onClick = {onClick}>
      {title}

      {icon === "" ? "" : <i className={icon} />}
  </Button>);
};