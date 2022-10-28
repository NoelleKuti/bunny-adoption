import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer.js';
import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORMS, HANDLE_TEXT_INPUT, HANDLE_BOOL_CHANGE, VIEW_BUNNIES, CHOOSE_BUNNY_TO_EDIT, TOGGLE_SHOW_ALERT, CLEAR_ALERT, LOGIN_ADMIN, LOGOUT_ADMIN, VIEW_APPLICATIONS } from './appActions.js';
import axios from 'axios'

//const urlHead = 'http://localhost:5000'
const urlHead = '';
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
		linkTo: '',
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
                otAgree: false,
                otDescribe: '',
            },
            correctDiet: false,
			chewingOpportunities: false,
			litterBoxProgram: false,
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
	applications: [],
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
		fetchBunnies();
    }
    
    const clearForms = () => {
        dispatch({ type: CLEAR_FORMS})
    }
    const handleTextInput = (data) => {
        dispatch({
            type: HANDLE_TEXT_INPUT,
            payload: {
                e: data.e,
                formName: data.formName,
				groups: data.groups
            }
        })
    }

    const handleBoolChange = (data) => {
        dispatch({
            type: HANDLE_BOOL_CHANGE,
            payload: data
        })
    }

    const fetchBunnies = () => {
        axios.get(`${urlHead}/api/v1/bunnies`, { crossdomain: true })
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

	const fetchApplications = () => {
		axios.get(`${urlHead}/api/v1/applications/`, { crossdomain: true })
			.then((response) => {
				dispatch({
					type: VIEW_APPLICATIONS,
					payload: response.data
				})
			})
			.catch((error) => {
				console.log(error)
			});
	}

	const deleteApplication = (objectID) => {
		axios.delete(`${urlHead}/api/v1/applications/${objectID}`)
		.then(() => {
			console.log('item successfully deleted');
		})
		.then(() => {
			fetchApplications();
		})
		.catch((error) => {
			console.log(error);
		})
	}

    const addBunny = (formData) => {
        axios.post(`${urlHead}/api/v1/bunnies`, {...formData})
            /*
			.then((response) => {
                console.log(response.data);
            })
			*/
            .then(() => {
                dispatch({type: TOGGLE_ADD_FORM})
            })
    }

    const deleteBunny = (objectId) => {
        axios.delete(`${urlHead}/api/v1/bunnies/ ${objectId}`)
            .then(() => {
                fetchBunnies();
            })
    }

    const chooseBunnyToEdit = (data) => {
        toggleShowForm('edit');
        dispatch({ type: CHOOSE_BUNNY_TO_EDIT, payload: {...data}})
    }

    const editBunny = (id, data) => {
        axios.patch(`${urlHead}/api/v1/bunnies/${id}`, data)
            .then(() => {
                dispatch({type: TOGGLE_EDIT_FORM})
            })
			.then(() => {
				//dispatch success alert
				console.log('bunny successfully edited');
			})
			.catch((error) => {
				console.log(error);
			})
    }

    const clearAlert = () => {
        dispatch({
            type: CLEAR_ALERT
        })
    }

    const toggleShowAlert = (data) => {
        const {alertType, alertText} = data;

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

        axios.post(`${urlHead}/api/v1/auth/login`, {userName, password})
            .then((res) => {
                //console.log(res.data.message);
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
        return axios.get(`${urlHead}/api/v1/auth/check`);
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

	const submitApplication = (formData) => {
		axios.post(`${urlHead}/api/v1/applications/`, formData)
			.then((response) => {
				console.log(response.data);
			})


	}
    
    

    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleShowForm,
                clearForms,
                handleTextInput,
                handleBoolChange,
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
                checkAuth,
				fetchApplications,
				submitApplication,
				deleteApplication,
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
