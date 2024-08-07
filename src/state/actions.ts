import { PayloadAction } from "@reduxjs/toolkit";

const addWord: (payload: string) => PayloadAction<string> = (payload) => ({
  type: "ADD_WORD",
  payload: payload,
});
const deleteWord: (payload: string) => PayloadAction<string> = (payload) => ({
  type: "DELETE_WORD",
  payload: payload,
});
const incrementBy: (payload: number) => PayloadAction<number> = (payload) => ({
  type: "INCREMENT",
  payload: payload,
});
const decrementBy: (payload: number) => PayloadAction<number> = (payload) => ({
  type: "DECREMENT",
  payload: payload,
});

export const actions = {
  addWord,
  deleteWord,
  incrementBy,
  decrementBy,
};
