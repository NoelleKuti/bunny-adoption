import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_BUNNIES, CHOOSE_BUNNY_TO_EDIT, TOGGLE_SHOW_ALERT, CLEAR_ALERT } from "./appActions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_ADD_FORM:
            return {
                ...initialState,
                showForm: (!state.showForm),
                formType: 'add',
            }
        case TOGGLE_EDIT_FORM:
            return {
                ...state,
                showForm: (!state.showForm),
                form: state.bunnyToEdit,
                formType: 'edit'
            }
        case CLEAR_FORM:
            return {
                ...state,
                catName: '',
                description: '',
                charsRemaining: 500,
                yearsOld: 0,
                monthsOld: 0,
                xdoor: '',
                fixed: false,
                available: true,
                showAlert: false,
                alertText: '',
            }
        case HANDLE_TEXT_INPUT:
            let {e, formName} = action.payload;
            switch (formName) {
                case 'bunny':
                    return {
                        ...state,
                        form : {
                            ...state.form,
                            [e.target.name] : e.target.value,
                        }
                    }
                case 'login':
                    return {
                        ...state,
                        login : {
                            ...state.login,
                            [e.target.name] : e.target.value
                        }
                    }
                case 'adoptForm':
                    console.log('still under construction!');
            }
            
           
        case VIEW_BUNNIES:
            return {
                ...state,
                bunniesData: action.payload,
            }
        case CHOOSE_BUNNY_TO_EDIT:
            const { bunnyName, description, temperament, age, variation, imageLink } = action.payload;
            return {
                ...state,
                form: {
                    bunnyName : bunnyName,
                    description : description,
                    temperament : temperament,
                    age : age,
                    variation : variation,
                    imageLink : imageLink
                },
                bunnyToEdit: {...action.payload},
            }
        case TOGGLE_SHOW_ALERT:
            const {alertType, alertText} = action.payload;
            return {
                ...state,
                showAlert: true,
                alertType: alertType,
                alertText: alertText
            }
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertText: '',
                alertType: '',
            }
    }
}

export default reducer;