import type { GetStaticProps, NextPage } from "next"

interface Parameters {
  post: string;
}

const ShopPage: NextPage = ({post}: Parameters) => {

  return (<>
    <div>
      <h3>쇼핑몰 </h3>

      <h1> 해당 컨텐츠 </h1>
    </div>
  </>)
}
export default ShopPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "고객상담 관리",
    },
  };
};
