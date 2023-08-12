import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import { Favorite } from "@mui/icons-material";
import { Button, Grid, Pagination } from "@mui/material";
import SEO from "./cart/SEO";
import  FlexBox  from "./cart/FlexBox";
import ProductCard1 from "./wish/ProductCard1";
// import UserDashboardHeader from "components/header/UserDashboardHeader";
// import CustomerDashboardLayout from "components/layouts/customer-dashboard";
// import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import productDatabase from "./wish/product-database";
import Product from "./wish/Product.model";

// ==================================================================
type WishListProps = { totalProducts: number; products: Product[] };
// ==================================================================

const WishList: NextPage<WishListProps> = (props) => {
  const { totalProducts, products } = props;

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // HANDLE CHANGE PAGINATION
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  // SECTION HEADER TITLE LINK
  const HEADER_BUTTON = (
    <Button color="primary" sx={{ px: 4, bgcolor: "primary.light" }}>
      Add All to Cart
    </Button>
  );

  return (
<>
      <SEO title="Wishlist" />




      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ProductCard1
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              rating={item.rating}
              imgUrl={item.thumbnail}
              discount={item.discount}
            />
          </Grid>
        ))}
      </Grid>

      {/* PAGINATION AREA */}
      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          color="primary"
          variant="outlined"
          page={currentPage}
          count={Math.ceil(totalProducts / 6)}
          onChange={(_, page) => handleChangePage(page)}
        />
      </FlexBox>
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = productDatabase.slice(0, 30);

  const PAGE_SIZE = 6;
  const PAGE_NUMBER = context.query.page ? Number(context.query.page) : 1;

  const currentProducts = products.slice(
    (PAGE_NUMBER - 1) * PAGE_SIZE,
    PAGE_NUMBER * PAGE_SIZE
  );

  return {
    props: { products: currentProducts, totalProducts: products.length },
  };
};

export default WishList;
