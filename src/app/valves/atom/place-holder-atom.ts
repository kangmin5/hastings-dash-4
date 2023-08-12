export const PlaceUnion = { 
    COMPANY_NAME_MUST: "회사명은 필수값입니다",
    CEO_NAME_MUST: "대표자명은 필수값입니다",
    BIZ_NO_1_MUST: "사업자등록번호-1은 필수값입니다",
    BIZ_NO_2_MUST: "사업자등록번호-2은 필수값입니다",
    BIZ_NO_3_MUST: "사업자등록번호-3은 필수값입니다",
    CORP_NO_1_MUST: "법인등록번호-1은 필수값입니다",
    CORP_NO_2_MUST: "법인등록번호-2은 필수값입니다",
    BIZ_KIND_MUST: "업태는 필수값입니다.",
    BIZ_ITEM_MUST: "업종은 필수값입니다.",
    COMPANY_ADDRESS_MUST: "회사주소는 필수값입니다",
    COMPANY_ADDRESS_DETAIL_MUST: "회사상세주소는 필수값입니다",
    COMPANY_ADDRESS_SEARCH_CLICK: "회사주소는 검색버튼을 클릭하세요",
    USER_ID_CONDITION: "공백 없는 영문, 숫자 포함 5~20자",
    PASSWORD_CONDITION: "비밀번호(영문, 숫자, 특수문자 조합 8~20자)",
    PW_CONFIRM: "비밀번호를 한번 더 체크해주세요",
    NAME_CONDITION: "공백 없는 한글 이름 2~5자",
    EMAIL_MUST: "이메일은 필수값입니다",
    PHONE_MUST: "휴대폰은 필수값입니다",
    ADDRESS_SEARCH_CLICK: "주소는 검색버튼을 클릭하세요",
    ORDER_NO_MUST: "주문번호는 필수값입니다",
    ADDRESS_MUST: "주소는 필수값입니다",
    
} as const;

type PlaceUnion = typeof PlaceUnion[keyof typeof PlaceUnion];