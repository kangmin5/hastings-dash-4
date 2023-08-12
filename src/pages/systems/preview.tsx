import type { GetStaticProps, NextPage } from "next"

interface Parameters {
  post: string;
}

const PreviewPage: NextPage = ({post}: Parameters) => {

  return (<>
    <div>
      <h3>미리보기 </h3>

      <h1> 해당 컨텐츠 </h1>
    </div>
  </>)
}
export default PreviewPage;

