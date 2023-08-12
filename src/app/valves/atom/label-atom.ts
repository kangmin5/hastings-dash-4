export const LabelUnion = { 
    NO_DATA: "등록된 데이터가 없습니다",
   
} as const;

type LabelUnion = typeof LabelUnion[keyof typeof LabelUnion];