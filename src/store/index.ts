import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

// ** Reducers
// import chat from 'store/apps/chat'
// import user from 'store/apps/user'
// import email from 'store/apps/email'
// import invoice from 'store/apps/invoice'
// import calendar from 'store/apps/calendar'
// import permissions from 'store/apps/permissions'

// ** Real Reducers
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { ApplySlice as applies } from 'app/taxes/org/apply-org/apply-dao'
import { applyReducer as apply } from 'app/taxes/org/apply-org/apply-reducer'
import { BankSlice as banks } from 'app/taxes/org/bank-org/bank-dao'
import { bankReducer as bank } from 'app/taxes/org/bank-org/bank-reducer'
import { ReceiptSlice as receipts } from 'app/taxes/org/receipt-org/receipt-dao'
import { receiptReducer as receipt } from 'app/taxes/org/receipt-org/receipt-reducer'
import { InquirySlice as inquiries } from 'app/boards/org/inquiry-org/inquiry-dao'
import { inquiryReducer as inquiry } from 'app/boards/org/inquiry-org/inquiry-reducer'
import { BoardSlice as boards } from 'app/boards/org/board-org/board-dao'
import { boardReducer as board } from 'app/boards/org/board-org/board-reducer'
import { CounselSlice as counsels } from 'app/boards/org/counsel-org/counsel-dao'
import { counselReducer as counsel } from 'app/boards/org/counsel-org/counsel-reducer'
import { NoticeSlice as notices } from 'app/boards/org/notice-org/notice-dao'
import { noticeReducer as notice } from 'app/boards/org/notice-org/notice-reducer'
import { FaqSlice as faqs } from 'app/boards/org/faq-org/faq-dao'
import { faqReducer as faq } from 'app/boards/org/faq-org/faq-reducer'
import { AuthorSlice as authors } from 'app/authors/org/author-org/author-dao'
import { BizSlice as bizMembers } from 'app/authors/org/biz-org/biz-dao'
import { authorReducer as author } from 'app/authors/org/author-org/author-reducer'

import { AddrSlice as addrs } from 'app/deliveries/org/addr-org/addr-dao'
import { addrReducer as addr } from 'app/deliveries/org/addr-org/addr-reducer'
import { ShipSlice as ships } from 'app/deliveries/org/ship-org/ship-dao'
import { shipReducer as ship } from 'app/deliveries/org/ship-org/ship-reducer'
import { UnshipSlice as unships } from 'app/deliveries/org/unship-org/unship-dao'
import { unshipReducer as unship } from 'app/deliveries/org/unship-org/unship-reducer'

// import { applyMiddleware, createReducer, compose } from 'redux'; // server-side 스토어와 client-side store를 합쳐준다.
// import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import { CustomerSlice as customers } from 'app/customers/org/customer-org/customer-dao'
import { SubscribeSlice as subscribes } from 'app/customers/org/subscribe-org/subscribe-dao'
import { DormantSlice as dormants } from 'app/customers/org/dormant-org/dormant-dao'
import { CartSlice as cart } from 'app/customers/org/cart-org/cart-dao'
import { NoteSlice as notes } from 'app/customers/org/note-org/note-dao'
import { TunnelSlice as tunnels } from 'app/customers/org/tunnel-org/tunnel-dao'
import { CatSlice as cats } from 'app/products/org/cat-org/cat-dao'
import { ProductSlice as products } from 'app/products/org/product-org/product-dao'
import { productReducer as product } from 'app/products/org/product-org/product-reducer'
import { AskSlice as asks } from 'app/products/org/ask-org/ask-dao'
import { askReducer as ask } from 'app/products/org/ask-org/ask-reducer'
import { ReviewSlice as reviews } from 'app/products/org/review-org/review-dao'
import { OrderSlice as orders } from 'app/orders/org/order-org/order-dao'
import { orderReducer as order } from 'app/orders/org/order-org/order-reducer'
import { QuickSlice as quicks } from 'app/quotes/org/quick-org/quick-dao'
import { SimpleSlice as simples } from 'app/quotes/org/simple-org/simple-dao'
import { MailSlice as mails } from 'app/deliveries/org/mail-org/mail-dao'
import { ScheduleSlice as schedules } from 'app/systems/org/schedule-org/schedule-dao'

import { PointSlice as points } from 'app/customers/org/point-org/point-dao'
import { lnbReducer as lnb } from 'app/valves/org/lnb-org/lnb-reducer'
const persistConfig = {
  version: 1,
  key: 'root', // localStorage key
  storage, // localStorage
  timeout: null,
  whitelist: ['authors', 'author', 'lnb'] // target (reducer name)
}

export const store = configureStore({
  reducer: {
    applies,
    apply,
    banks,
    bank,
    receipts,
    receipt,
    inquiries,
    inquiry,
    boards,
    board,
    counsels,
    counsel,
    notices,
    notice,
    faqs,
    faq,
    authors,bizMembers,
    author,
    asks,
    ask,
    ships,
    ship,
    unships,
    unship,
    quicks,
    simples,
    reviews,
    customers, notes, tunnels,
    dormants,
    subscribes,
    points,
    addrs,
    addr,
    cart,
    cats, schedules,
    products,
    product,
    orders,
    order,
    mails,
    lnb
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

//const persistedReducer = persistReducer(persistConfig, combinedReducer);

// function getServerState() {
//   return typeof typeof window !== "undefined" && document !== undefined
//     ? JSON.parse(document.getElementById("__NEXT_DATA__").textContent).props
//         .pageProps.initialState
//     : undefined;
// }
// export const makeStore = () => {
//   const app = configureStore({
//       reducer: (state, action) => {
//           switch (action.type) {
//               case HYDRATE:
//                   return {...state, ...action.payload}

//                case "authors/clear":
//                 console.log("Action Type : ", action.type)
//                     storage.removeItem('persist:root')
//                     state = {} as RootState
//               default:

//                   // return combinedReducer(state, action);
//                   return persistedReducer(state, action);
//           }
//       },
//       middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false ,
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],}).concat(logger),
//       devTools: process.env.NODE_ENV !== 'production',
//   });
//   return app;
// }
// const store = makeStore();
// export const persistor = persistStore(store);

// const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });

// // export type RootState = ReturnType<typeof combinedReducer>;
// // ** https://www.devkkiri.com/post/56578a18-d1fc-4c67-a2c4-6d64e21cf70c

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
// export default wrapper;

export default store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
