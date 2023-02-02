import { Product } from '@/templates/Home';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Cart {
  id: number;
  name: string;
  price: number;
  photo: string;
  quantity: number;
}

export interface CartState {
  items: Cart[];
}

export const initialState: CartState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const existsInCard = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existsInCard) {
        existsInCard.quantity = existsInCard.quantity + 1;
      } else {
        const data: Cart = {
          id: action.payload.id,
          name: action.payload.name,
          photo: action.payload.photo,
          price: action.payload.price,
          quantity: 1
        };

        state.items.push(data);
      }
    },

    removeFromCart: (state, action) => {
      const newCartItems = state.items?.filter(
        (item) => item.id !== action.payload
      );

      state.items = newCartItems;
    },
    increaseItemQuantity: (state, action) => {
      const newProducts = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      state.items = newProducts;
    },
    decreaseItemQuantity: (state, action) => {
      const newProduct = state.items?.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
          };
        }
        return item;
      });

      state.items = newProduct;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
