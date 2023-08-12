import React from 'react';
import Button from "@mui/material/Button";

export function MoveButton(props: any) {
  const { title, onClick, icon, className } = props

  return (
    <Button color="info" variant="outlined" size="medium" style={{ width: "14rem" }}
      className={className === "" ? "" : className}
      onClick={onClick}>
      {title}

      {icon === "" ? "" : <i className={icon} />}

    </Button>
  )
}
/*
   <i className="link" />
*/