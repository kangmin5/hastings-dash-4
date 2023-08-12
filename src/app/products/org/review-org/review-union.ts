const target = `products/review`

export const ReviewUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=srch&aim=user`,
} as const;
type ReviewUrl = typeof ReviewUrl[keyof typeof ReviewUrl];

export const ReviewAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type ReviewAction = typeof ReviewAction[keyof typeof ReviewAction];


export const ReviewStrategy = {
  getAllReviews: "getAllReviews",
  delReviewById: "delReviewById",
  getReviewById: "getReviewById",
  addReview: "addReview",
  alterReviewById: "alterReviewById",
  getReviewsBy: "getReviewsBy",
  getReviewsByUser: "getReviewsByUser",


} as const;
type ReviewStrategy = typeof ReviewStrategy[keyof typeof ReviewStrategy];
