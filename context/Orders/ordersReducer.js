export const ordersReducer = (state, action) => {

switch (action.type) {
    case 'load_orders':
      return {
          ...state,
          orders: action.payload,
      }
    case 'update_orders':
      return {
          ...state,
          orders: state.orders.map( order => {
            if ( order.id === action.payload.id ) {
               order.status = action.payload.status
            }
            return entry;
          }),
      }
    default:
      return state;
}
}