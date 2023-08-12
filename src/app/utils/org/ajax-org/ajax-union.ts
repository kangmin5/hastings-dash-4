export const AjaxUnion = {
  get: `get`,
  post: `post`,
  put: `put`,
  del: `delete`,


} as const;


type AjaxUnion = typeof AjaxUnion[keyof typeof AjaxUnion];
