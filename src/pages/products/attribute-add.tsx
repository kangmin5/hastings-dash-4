import type { GetStaticProps, NextPage } from "next"
import Link from "next/link";

interface Parameters {
  post: string;
}

const AttributeAddPage: NextPage = ({post}: Parameters) => {

  return (<>
    <header>
  <ul>
    <li>
      <Link href="/sales/order-taker/excels">
        엑셀파일 관리
      </Link>
    </li>
    <li>
      <Link href="/sales/order-taker/excels/about">
        가이드
      </Link>
    </li>
    <li>
      <Link href="/sales/order-taker/excels/[id]" as="/sales/order-taker/excels/simple-quote">
        간편 견적 엑셀파일
      </Link>
    </li>
    <li>
      <Link href="/sales/order-taker/excels/[id]" as="/sales/order-taker/excels/quick-quote">
        주문제작 견적 엑셀파일
      </Link>
    </li>
  </ul>
</header>
    <div>
      <h3>엑셀 파일 관리 홈 </h3>

      <h1> 해당 컨텐츠 </h1>
    </div>
  </>)
}
export default AttributeAddPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "메인상품 관리",
    },
  };
};

