import React from 'react';
import Button from "@mui/material/Button";

export function CartButton() {
    return (
        <>
            <div className="btn-wrap">
                <Button size="medium" variant="outlined">
                    장바구니
                </Button>
                {/* <Button size="medium" variant="contained">
                    바로구매
                </Button> */}
            </div>
        </>)
}
export function CartBuyButton() {
    return (
        <>
            <div className="btn-wrap">
                <Button size="medium" variant="outlined">
                    장바구니
                </Button>
                <Button size="medium" variant="contained">
                    바로구매
                </Button>
            </div>
        </>)
}