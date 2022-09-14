import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_BUNNIES, CHOOSE_BUNNY_TO_EDIT } from "./appActions";
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
                showError: false,
                errorText: '',
            }
        case HANDLE_TEXT_INPUT:
            const e = action.payload;
            return {
                ...state,
                form : {
                    ...state.form,
                    [e.target.name] : e.target.value,
                }
            }
        case VIEW_BUNNIES:
            const data = action.payload;
            return {
                ...state,
                bunniesData: data
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
                adoptionForm: {
                    
                }
            }
    }
}

export default reducer;