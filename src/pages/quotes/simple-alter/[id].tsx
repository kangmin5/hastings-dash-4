import type { GetStaticProps, NextPage } from "next"

interface Parameters {
  post: string;
}

const SimpleAlterPage: NextPage = ({post}: Parameters) => {

  return (<>
    <div>
      <h3>엑셀 파일 관리 홈 </h3>

      <h1> 해당 컨텐츠 </h1>
    </div>
  </>)
}
export default SimpleAlterPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "고객상담 관리",
    },
  };
};
