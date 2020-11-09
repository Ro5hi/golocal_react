    const initialState = {
        name: "",
        username: "",
        password: "",
        business: {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            category: "",
            image: "",
        }
    }

    export const signupReducer = (state=initialState, action) => {
        switch (action.type) {
            case "UPDATE_SIGNUP_FORM":
                return action.formData
            case "RESET_SIGNUP_FORM":
                return initialState
            default:
                return state 
        }
    }