export const ButtonUnion = { 
    OPEN: "열기",
    CLOSE: "닫기",

} as const;

type ButtonUnion = typeof ButtonUnion[keyof typeof ButtonUnion];