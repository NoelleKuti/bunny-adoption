import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer';
import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_BUNNIES, CHOOSE_BUNNY_TO_EDIT, SHOW_ALERT, CLEAR_ALERT } from './appActions';
import axios from 'axios'

const initialState = {
    showForm: false,
    formType: '',
    form: {
        bunnyName: '',
        description: '',
        temperament: '',
        age: '',
        variation: '',
        imageLink: '',
    },
    showAlert: false,
    alertText: '',
    alertType: '',
    bunniesData: [],
    bunnyToEdit: {},
    adoptForm: {
        aboutYou: {
            familyNamesAges: '',
            address: '',
            phoneNumber: '',
            email: '',
            vetInfo: {
                vetName: '',
                vetPhone: '',
                vetAddress: '',
            },
            petsInfo: '',
        },
        desiredRabbitName: '',
        agreeToCare: {
            describeHousing: '',
            indoorHousing: false,
            sufficientSpace: false,
            outdoorTime: {
                agree: false,
                describe: '',
            },
            correctDiet: false,
            financiallyAble: false,
            informedMedical: false,
            respectBoundaries: false,
            groomingMaintenance: false,
        },
        agreeToContact: {
            contactIfCannotKeep: false,
            properNotice: false,
            neverRehome: false,
            preventPregnancy: false,
            willReachOut: false,
        }, 
    },
    login: {
        userName: '',
        password: '',
    }
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleShowForm = (formType) => {
        if (formType === 'add') {
            dispatch({ type: TOGGLE_ADD_FORM });
        } else if (formType === 'edit') {
            dispatch({ type: TOGGLE_EDIT_FORM})
        }
    }
    
    const clearForm = () => {
        dispatch({ type: CLEAR_FORM})
    }
    const handleTextInput = (data) => {
        dispatch({
            type: HANDLE_TEXT_INPUT,
            payload: {
                e: data.e,
                formName: data.formName
            }
        })
    }

    const handleAgeChange = (data) => {
        dispatch({
            type: HANDLE_AGE_CHANGE,
            payload: data
        })
    }

    const fetchBunnies = () => {
        axios.get('http://localhost:5000/api/v1/bunnies', { crossdomain: true })
            .then((response) => {
                dispatch({
                    type: VIEW_BUNNIES,
                    payload: response.data,
                })
            })
			.catch((err) => {
				console.log(err);
			})
    }

    const addBunny = (formData) => {
        axios.post('http://localhost:5000/api/v1/bunnies', {...formData})
            .then((response) => {
                console.log(response.data);
            })
            .then(() => {
                dispatch({type: TOGGLE_ADD_FORM})
            })
    }

    const deleteBunny = (objectId) => {
        axios.delete('http://localhost:5000/api/v1/bunnies/' + objectId)
            .then(() => {
                fetchBunnies();
            })
    }

    const chooseBunnyToEdit = (data) => {
        toggleShowForm('edit');
        dispatch({ type: CHOOSE_BUNNY_TO_EDIT, payload: {...data}})
    }

    const editBunny = (id, data) => {
        
        console.log(id, data);
        axios.patch(`http://localhost:5000/api/v1/bunnies/${id}`, data)
            .then((response) => {
                dispatch({type: TOGGLE_EDIT_FORM})
                fetchBunnies();
            })
    }

    const clearAlert = () => {
        dispatch({
            type: CLEAR_ALERT
        })
    }

    const showAlert = (data) => {
        const {alertType, alertText} = data;
        dispatch({ 
            type: SHOW_ALERT,
            payload: {
                alertType: alertType,
                alertText: alertText,
            }
        })
    }


    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleShowForm,
                clearForm,
                handleTextInput,
                handleAgeChange,
                fetchBunnies,
                deleteBunny,
                addBunny,
                editBunny,
                chooseBunnyToEdit,
                showAlert,
                clearAlert,
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
