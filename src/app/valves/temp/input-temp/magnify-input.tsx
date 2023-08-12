import React from 'react'
import { styled } from '@mui/material/styles'


export function MagnifyInput(props: any) {

    return (<>
        <MagnifyWrapper >
            <MagnifyInput_ type="text"  placeholder="search" />
            <MagnifyButton type="submit"><i ></i></MagnifyButton>
        </MagnifyWrapper>

    </>)
}



const MagnifyWrapper = styled('div')({
    background: 'white',
    position: 'relative',
})

const MagnifyInput_ = styled('input')({
    width: '100%',
    padding: '20px 60px 20px 20px',
    display: 'block'
})

const MagnifyButton = styled('button')({
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '20px',
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '18px 20px',
    zIndex: '2',
  })
