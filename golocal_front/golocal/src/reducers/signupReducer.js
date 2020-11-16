    const initialState = {
        name: "",
        username: "",
        password: "",
        business: {
            name: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipcode: ""
        }
    }

    export const signupForm = (state=initialState, action) => {
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