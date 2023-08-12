import React from 'react';
import Button from "@mui/material/Button";

export function HistoryDeleteButton(props: any) {

    const deleteHistory = () => {
        window.localStorage.removeItem('history');
        window.location.reload();
       // window.location.replace(`${props.path}`)
    }

  return (
    <Button
      variant="outlined"
      size="large"
      color="info"
      style={{ width: "14rem" }}

      onClick={deleteHistory}>
      {props.title}
    </Button>
  );
}
