/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import reviewReducer from './review/reviewSlice.js';
import productReducer from './products/productsSlice.js';
import orderReducer from './order/orderSlice.js';
import notificationReducer from './notification/notificationSlice.js';

/*----------------------------------------------------------------------------*/
/* store                                                                      */
/*----------------------------------------------------------------------------*/

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    review: reviewReducer,
    order: orderReducer,
    notification: notificationReducer,
  },
});

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
