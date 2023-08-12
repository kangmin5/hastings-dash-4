export const InputUnion = { 
    W300_H30: { "width": "300px", "height": "30px" },
    W140_H30: { "width": "140px", "height": "30px" },
    W110_H30: { "width": "110px", "height": "30px" },
    W70_H30: { "width": "70px", "height": "30px" },
    ROUND: "rounded-md text-xl p-2",
    FORM_WRAP: "form-wrap",
    TXT: "text",

    
    
} as const;

type InputUnion = typeof InputUnion[keyof typeof InputUnion];