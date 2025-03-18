
export const initialState = {
    basket :[] 
};
// console.log(initialState.basket);

// Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount , 0);

 const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case "ADD_TO_BASKET" :
        return{
            ...state,
            basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET" :
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        // return{ // this return deleted all item from cart which have a same id.
        //         ...state,
        //         basket: state.basket.filter((item) => item.id !== action.id)
        //         };

                let newBasket = [...state.basket];
                
                if(index >= 0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket!`);
                    }
                    return{
                        ...state,
                        basket: newBasket
                        };
            default:
                return state;
        }        
    }

    export default reducer;
