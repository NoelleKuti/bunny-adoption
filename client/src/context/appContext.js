import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer.js';
import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORMS, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_BUNNIES, CHOOSE_BUNNY_TO_EDIT, TOGGLE_SHOW_ALERT, CLEAR_ALERT, LOGIN_ADMIN, LOGOUT_ADMIN } from './appActions.js';
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
    },
    authKey: '',
	isLoggedIn: false,
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
    
    const clearForms = () => {
        dispatch({ type: CLEAR_FORMS})
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
        axios.get('/api/v1/bunnies', { crossdomain: true })
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
        axios.post('/api/v1/bunnies', {...formData})
            .then((response) => {
                console.log(response.data);
            })
            .then(() => {
                dispatch({type: TOGGLE_ADD_FORM})
				fetchBunnies();
            })
    }

    const deleteBunny = (objectId) => {
        axios.delete('/api/v1/bunnies/' + objectId)
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
        axios.patch(`/api/v1/bunnies/${id}`, data)
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

    const toggleShowAlert = (data) => {
        const {alertType, alertText} = data;
        console.log(alertType, alertText);
        dispatch({ 
            type: TOGGLE_SHOW_ALERT,
            payload: {
                alertType: alertType,
                alertText: alertText,
            }
        })
    }

    const handleLogin = (e, data) => {
        e.preventDefault();
        const {userName, password} = data;

        axios.post('/api/v1/auth/login', {userName, password})
            .then((res) => {
                console.log(res.data.message);
                if (res.data.success === true) {
                    toggleShowAlert({alertType: 'success', alertText: res.data.message});
                    
					setTimeout(clearAlert, 5000);
                    
					dispatch({ type: LOGIN_ADMIN, payload: {data: res.data.key}})

					localStorage.setItem('creds', res.data.key)
                } else {
                    toggleShowAlert({alertType: 'danger', alertText: res.data.message});
                    setTimeout(clearAlert, 5000);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleLogout = () => {
        dispatch({
            type: LOGOUT_ADMIN
        })
		localStorage.removeItem('creds');
    }

    const getKey = () => {
        return axios.get('/api/v1/auth/check')
    } 

    const checkAuth = async (key) => {
		const request = await getKey();
		const officialKey = request.data.key;
		
		if (key === officialKey) {
			//console.log(`${key} equals ${officialKey}`);
			dispatch({
				type: LOGIN_ADMIN,
				payload: {
					data: officialKey
				}
			});
		} else if (key !== officialKey) {
			//console.log(`${key} does not equal ${officialKey}`);
			dispatch({
				type: LOGOUT_ADMIN
			})
		}
	}

	
    
    

    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleShowForm,
                clearForms,
                handleTextInput,
                handleAgeChange,
                fetchBunnies,
                deleteBunny,
                addBunny,
                editBunny,
                chooseBunnyToEdit,
                toggleShowAlert,
                clearAlert,
                handleLogin,
                handleLogout,
                getKey,
                checkAuth
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
