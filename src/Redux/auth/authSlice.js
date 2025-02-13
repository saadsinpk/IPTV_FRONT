import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:localStorage?.getItem('token') || null,
    application:localStorage?.getItem('application') || "",
    user:localStorage?.getItem('user')?
    (()=>{
        try {
            return JSON.parse(localStorage?.getItem('user'))
        } catch (error) {
            return null
        }
    }) ():''
}
export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setUser:((state,action)=>{
            const {token,user,application}=action.payload
            state.token=token,
            state.user=user,
            state.application=application
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('application', application);
        }),
        clearUser:((state)=>{
            state.token=null,
            state.user=null
            state.application=null
            localStorage.removeItem('token', state.token);
            localStorage.removeItem('user', state.user);
            localStorage.removeItem('application', state.application);
        })
    }
})

export const {setUser,clearUser}=authSlice.actions
export const selectToken=(state)=>state?.auth?.token
export const selectUser=(state)=>state?.auth?.user
export default authSlice.reducer;