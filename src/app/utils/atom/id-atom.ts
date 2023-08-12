export function IdMap() {

  const generateRandomCode = (n: number) =>{
    let str = ''
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10)
    }

    return str
  }

  function get(key?: string) {
    const defaultKey = "4자리난수"
    let randomValue = ""
    switch(key){
         case "1자리난수": randomValue = ''+Math.floor(Math.random() * 10); break;
         case "2자리난수": randomValue = generateRandomCode(2);  break;
         case "3자리난수": randomValue = generateRandomCode(3);  break;
         case "4자리난수": randomValue = generateRandomCode(4);  break;
         default : generateRandomCode(5)
    }
    return randomValue
  }
  return Object.freeze({
    get
  })
}

function randomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }
  export const IdUnion = {
    ID: "1",
    ZERO_TO_NINE: "zero-to-nine"

  } as const;

  type IdUnion = typeof IdUnion[keyof typeof IdUnion];
