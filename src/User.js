import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [
      {
        id: 1,
        name: "Darren Watkins Jr",
        nickname: "IShowSpeed"
      }
    ]
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          return (
            (user.name = action.payload.name),
            (user.nickname = action.payload.nickname)
          );
        }
      });
    }
  }
});
export default userSlice.reducer;
export const { addUser, deleteUser, updateUser } = userSlice.actions;
