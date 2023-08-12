import React from 'react';
import Button from "@mui/material/Button";
export function SubmitButton  (props: any) {

  const {title, onClick, disabled} = props
  return (
    <Button type="submit"
    size="medium"
    variant="contained"
    className="x-large" 
    disabled={disabled}
    onClick={onClick}
    > {title}  </Button>
  );
};