import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "b";

const filterSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: filterInitialState,
  // Об'єкт редюсерів
  reducers: {
      setFilter(state, action)
    {
      state.filter = action.payload;
     // console.log(state);
    },
  },
});

// Генератори екшенів
export const { setFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReduser = filterSlice.reducer;