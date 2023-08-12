import React from 'react';
import Button from "@mui/material/Button";

export function KakaoButton  (props: any) {
  const handleClick = React.useCallback(() => {
    alert("kakao button is clicked");
}, []);

  return (
    <Button
    fullWidth
    variant="outlined"
    className="btn-kakao"
     onClick = {handleClick}>
      {props.title}
    </Button>

  );
}
