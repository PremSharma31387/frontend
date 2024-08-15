import { api, apii } from "../../Config/Config";
import {
  CREATE_PRODUCTS_FAILURE,
  CREATE_PRODUCTS_REQUEST,
  CREATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_CATEGORY_REQUEST,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

// Find Products By Filter
export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    category,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    pageNumber,
    pageSize,
    stock,
  } = reqData;

  // console.log("reqData", reqData);

  try {
    const { data } = await apii.get(
      `/api/products?color=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    // console.log("Products data ", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

//   Find Product by Id
export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await apii.get(`/api/products/${productId}`);
    // console.log("product by id", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

// ADMIN ACTIONS

// delete product

export const deleteProduct = (productId) => async (dispatch) => {
  console.log("Product Id for delete products" + productId);
  dispatch({ type: DELETE_PRODUCTS_REQUEST });
  try {
    const { data } = await api.delete(`/api/admin/product/delete/${productId}`);
    console.log("Product deleted successfully", data);
    dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCTS_FAILURE, payload: error.message });
  }
};

// Create Product

export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCTS_REQUEST });
  try {
    const { data } = await api.post(`/api/admin/product`, productData);
    console.log("product created", data);
    dispatch({ type: CREATE_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCTS_FAILURE, payload: error.message });
  }
};

// Find products by category

// export const findProductByCategory = (productName) => async (dispatch) => {
//   // const currName=null;
//   for(let i=0;i<productName.length;i++){
//     dispatch({ type: FIND_PRODUCT_BY_CATEGORY_REQUEST });
//   // const { productId } = reqData;
//   try {
//     const { data } = await api.get(`/api/products/category?category=${productName[i]}`);
//     // console.log("product by id", data);
//     dispatch({ type: FIND_PRODUCT_BY_CATEGORY_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCT_BY_CATEGORY_FAILURE, payload: error.message });
//   }
//   }

// };

// export const findProductByCategory = (categories) => async (dispatch) => {
//   for (let i = 0; i < categories.length; i++) {
//     dispatch({
//       type: FIND_PRODUCT_BY_CATEGORY_REQUEST,
//       payload: categories[i],
//     });
//     console.log("array-->", categories[i]);
//     try {
//       const { data } = await apii.get(
//         `/api/products/category?category=${categories[i]}`
//       );
//       console.log("$$$$$$$$$$$$$", data);
//       dispatch({
//         type: FIND_PRODUCT_BY_CATEGORY_SUCCESS,
//         payload: { category: categories[i], products: data },
//       });
//     } catch (error) {
//       dispatch({
//         type: FIND_PRODUCT_BY_CATEGORY_FAILURE,
//         payload: { category: categories[i], error: error.message },
//       });
//     }
//   }
// };

export const findProductByCategory = (categories) => async (dispatch) => {
  for (let i = 0; i < categories.length; i++) {
    dispatch({
      type: FIND_PRODUCT_BY_CATEGORY_REQUEST,
      payload: categories[i],
    });
    console.log("array-->", categories[i]);
    try {
      const { data } = await apii.get(
        `/api/products/category?category=${categories[i]}`
      );
      console.log("$$$$$$$$$$$$$", data);
      dispatch({
        type: FIND_PRODUCT_BY_CATEGORY_SUCCESS,
        payload: { category: categories[i], products: data },
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCT_BY_CATEGORY_FAILURE,
        payload: { category: categories[i], error: error.message },
      });
    }
  }
};
