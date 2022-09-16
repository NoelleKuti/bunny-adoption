import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer';
import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_BUNNIES, CHOOSE_BUNNY_TO_EDIT } from './appActions';
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
    showError: false,
    errorText: '',
    bunniesData: [],
    bunnyToEdit: {}
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
    const handleTextInput = (e) => {
        dispatch({
            type: HANDLE_TEXT_INPUT,
            payload: e
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
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
