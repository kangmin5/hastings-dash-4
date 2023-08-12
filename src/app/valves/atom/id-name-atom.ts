export const IdNameUnion = { 
    ADDRESS: "주소",
    BIZ_ITEM: "업종",
    BIZ_KIND: "업태",
    BIZ_NO_1: "사업자번호1",
    BIZ_NO_2: "사업자번호2",
    BIZ_NO_3: "사업자번호3",
    PHONE: "휴대폰",
    CEO: "대표자",
    ORDER_NO: "주문번호",
    BIZ_NAME: "회사명",
    CORP_NO_1: "법인번호1",
    CORP_NO_2: "법인번호2",
    EMAIL: "이메일",
    NAME: "이름",
    PASSWORD: "비밀번호",
    PW_CONFIRM: "비밀번호 확인",
    USER_ID: "아이디",
    
    
} as const;

type IdNameUnion = typeof IdNameUnion[keyof typeof IdNameUnion];