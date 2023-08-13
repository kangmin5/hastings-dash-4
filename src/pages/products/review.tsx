import { GetStaticProps, NextPage } from "next";
import { Container, Grid, Pagination } from "@mui/material";
import { H2, Span } from "../customers/cart/Typography";
import ShopCard1 from "./review/ShopCard1";
import FlexBetween  from "../customers/cart/FlexBetween";
import ShopLayout1 from "../customers/cart/ShopLayout1";
import api from "./review/shop";
import Shop from "./review/Shop.model";

// =============================================
type ShopListProps = { shopList: Shop[] };
// =============================================

const ShopList: NextPage<ShopListProps> = ({ shopList }) => {

  const arr = [
    {id : '', name: '', slug: '', phone: '', address: '',
    rating: 5, coverPicture: '', profilePicture: ''}
  ]


  return (
    <ShopLayout1>
      <Container sx={{ mt: 4, mb: 6 }}>
        <H2 mb={3}>리뷰 보기</H2>

        {/* ALL SHOP LIST AREA */}
        <Grid container spacing={3}>
          {arr.map((item) => (
            <Grid item lg={4} sm={6} xs={12} key={item.id}>
              <ShopCard1
                name={item.name}
                slug={item.slug}
                phone={item.phone}
                address={item.address}
                rating={item.rating || 5}
                coverPicture={item.coverPicture}
                profilePicture={item.profilePicture}
              />
            </Grid>
          ))}
        </Grid>

        {/* PAGINTAION AREA */}
        <FlexBetween flexWrap="wrap" mt={4}>
          <Span color="grey.600">Showing 1-9 of 300 Shops</Span>
          <Pagination
            count={arr.length}
            variant="outlined"
            color="primary"
          />
        </FlexBetween>
      </Container>
    </ShopLayout1>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const shopList = await api.getShopList();
//   return { props: { shopList } };
// };

export default ShopList;
