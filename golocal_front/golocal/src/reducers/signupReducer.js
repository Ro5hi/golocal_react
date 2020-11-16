    const initialState = {
        name: "",
        email: "",
        username: "",
        password: "",
        image: "",
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

    const signupForm = (state=initialState, action) => {
        switch (action.type) {
            case "UPDATE_SIGNUP_FORM":
                return action.formData
            case "RESET_SIGNUP_FORM":
                return initialState
            default:
                return state 
        }
    }

    export default signupForm