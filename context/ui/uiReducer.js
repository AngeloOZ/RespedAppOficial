
export const uiReducer = (state, action) => {

   switch (action.type) {
      case 'UI_MenuToggle':
         return {
            ...state,
            isMenuOpen: !state.isMenuOpen
         }
      default:
         return state;
   }
}