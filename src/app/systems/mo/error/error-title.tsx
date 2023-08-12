import { times, random } from "lodash";
const arr = ["[에러] 서버와의 연결이 원활하지 않습니다."];
export function ErrorTitleMap() {
  const Sample = (lineNum = 1) => {
    return arr[random(arr.length - 1)];
  };

  function get(flag?: string) {
    const defaultKey = "답변상태";
    const map = {
        답변상태: Sample(),
    };
    return map[flag] ?? map[defaultKey];
  }
  return Object.freeze({
    get,
  });
}
