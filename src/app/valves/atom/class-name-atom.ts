export const ClassNameUnion = {
    BUTTON: "bg-gray-300 rounded p-2 mb-2 text-xl",
    FORM_TAG: "flex flex-col max-w-3xl gap-2 mx-auto",
    ERROR_MESSAGE: "bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start",
    INPUT: "rounded-md text-xl p-2",
    INPUT_WRAPPER: "form-wrap",
    INLINE_BLOCK: "inline-block",
  } as const;

  type ClassNameUnion = typeof ClassNameUnion[keyof typeof ClassNameUnion];