
export const uiReducer = (state, action) => {

   switch (action.type) {
      case 'UI_MenuToggle':
         return {
            ...state,
            isMenuOpen: !state.isMenuOpen
         }
      case 'UI_isDraggin':
         return {
            ...state,
            isDragging: action.payload
         }
      default:
         return state;
   }
}