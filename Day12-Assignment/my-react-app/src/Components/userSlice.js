import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: [
            {
            name:null
            }
        ]
    },

    reducers:{
        addUser:(state, action)=>{
            state.value = action.payload                
        },
        logout:(state)=>{
            state.value = [];
        }
    }
})

export const { addUser,logout } = userSlice.actions

export default userSlice.reducer


// We get these form of Slice and we need to export actions and reducers

/* userSlice={
    actions:{
     addUser:
    },
    reducers:{

    }
} */