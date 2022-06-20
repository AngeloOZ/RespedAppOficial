
export const cartReducer = (state, action) => {
   switch (action.type) {
      case 'LOAD_CART_FROM_LOCALSTORAGE':
         return {
            ...state,
            cart: [...action.payload],
            isLoaded: true,
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
      case 'EMPTY_CART_PRODUCTS':
         return {
            ...state,
            isLoaded: false,
            cart: [],
            numberOfItems: 0,
            subTotal: 0,
         }
      default:
         return state;
   }
}