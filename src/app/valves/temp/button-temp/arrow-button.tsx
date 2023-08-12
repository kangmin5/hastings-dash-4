
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function ArrowButton  (props: any) {
  
  const {title, onClick} = props
  
  return ( <>
         <Button size="small" variant="text" className="icon end"
         onClick={onClick}>
              {title}
              <i className="link" />
            </Button>
    </>
  );
}
