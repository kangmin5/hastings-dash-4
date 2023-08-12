export function DateMap() {
  const now = () => {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초

    const now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    return now
  };

  function get(key?: string) {
    const defaultKey = "생성일";
    const map = {
      생성일: now(),
    };
    return map[key] ?? map[defaultKey];
  }

  return Object.freeze({
    get,
  });
}
