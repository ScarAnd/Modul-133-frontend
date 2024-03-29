/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import { createSlice } from '@reduxjs/toolkit';

/*----------------------------------------------------------------------------*/
/* reviewSlice                                                                */
/*----------------------------------------------------------------------------*/

export const reviewsSlice = createSlice({
  name: 'review',
  initialState: {
    loaded: false,
    loadedByUser: false,
    loadedByItem: false,
    reviews: [],
    reviewsByUser: [],
    reviewByItem: [],
    error: null,
  },
  reducers: {
    setReviews: (state, { payload }) => {
      state.reviews = payload;
      state.loaded = true;
    },
    setReviewsByUser: (state, { payload }) => {
      state.reviewsByUser = payload;
      state.loadedByUser = true;
    },
    addReview: (state, { payload }) => {
      state.reviews.push(payload);
    },
    setReviewByItem: (state, { payload }) => {
      state.reviewByItem = payload;
      state.loadedByItem = true;
    },
    updateReviewById: (state, { payload }) => {
      state.reviewByItem = state.reviewByItem.map((review) => {
        if (review.id === payload.id) {
          review.rating = payload.rating;
        }
        return review;
      });
    },
    deleteReview: (state, { payload }) => {
      let { id } = payload;
      state.reviews = state.reviews.filter((e) => e.id === id);
    },
  },
});

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export const {
  updateReviewById,
  deleteReview,
  addReview,
  setReviews,
  setReviewByItem,
  setReviewsByUser,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;
