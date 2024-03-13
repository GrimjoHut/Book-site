import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import LoreOne from './../Pages/Lore/LoreOne/LoreOne';
import LoreOneReducer from "./../Pages/Lore/LoreOne/Store/slices"



export type RootState = ReturnType<typeof store.getState>



export const store = configureStore({

  reducer:{
   LoreOne: LoreOneReducer,
  }
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
