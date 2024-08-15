import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { orderReducer } from "./Order/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { adminOrderReducer } from "./Admin/Order/Reducer";
import { orderItemReducer } from "./OrderItem/Reducer";
import { paymentReducer } from "./Payment/Reducer";
import { CategoryReducer } from "./Product/CategoryReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  products: customerProductReducer,
  order: orderReducer,
  cart: cartReducer,
  adminOrder: adminOrderReducer,
  orderItem:orderItemReducer,
  payment:paymentReducer,
  productCategory:CategoryReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
