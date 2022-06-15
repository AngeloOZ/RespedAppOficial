export const cartReducer = (state, action) => {
   switch (action.type) {
      case 'LOAD_CART_FROM_LOCALSTORAGE':
         return {
            ...state,
            cart: [...action.payload],
         }
      case 'ADD_CART_PRODUCT':
         return {
            ...state,
            cart: [...state.cart, action.payload],
         }
      case 'REMOVE_CART_PRODUCT':
         return {
            ...state,
            cart: state.cart.filter(product => !(product.idItem === action.payload)),
         }
      case 'UPDATE_ORDER_CART_SUMMARY':
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   }
}