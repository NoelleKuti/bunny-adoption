import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORMS, HANDLE_TEXT_INPUT, HANDLE_BOOL_CHANGE, VIEW_BUNNIES, CHOOSE_BUNNY_TO_EDIT, TOGGLE_SHOW_ALERT, CLEAR_ALERT, LOGIN_ADMIN, LOGOUT_ADMIN, VIEW_APPLICATIONS } from "./appActions.js";
import { initialState } from "./appContext.js";

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_ADD_FORM:
            return {
                ...initialState,
                showForm: (!state.showForm),
                formType: 'add',
				isLoggedIn: state.isLoggedIn,
            }
        case TOGGLE_EDIT_FORM:
            return {
                ...state,
                showForm: (!state.showForm),
                form: state.bunnyToEdit,
                formType: 'edit',
				isLoggedIn: state.isLoggedIn,
            }
        case CLEAR_FORMS:
            return {
                ...initialState,
                isLoggedIn: state.isLoggedIn,
            }
        case HANDLE_TEXT_INPUT:
            let {e, formName, groups} = action.payload;

            switch (formName) {
                case 'bunny':
                    return {
                        ...state,
                        form : {
                            ...state.form,
                            [e.target.name] : e.target.value,
                        },
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
                    let groupName = groups[0];
					let subGroupName = groups[1];
					
					if (groups.length === 1) {
						if (groupName === '') {
							return {
								...state,
								adoptForm : {
									...state.adoptForm,
									[e.target.name]: e.target.value
								}
							}
						} else {
							return {
								...state,
								adoptForm: {
									...state.adoptForm,
									[groupName] : {
										...state.adoptForm[groupName],
										[e.target.name]: e.target.value
									}
								}
							}
						}
					} else if (groups.length === 2) {
						return {
							...state,
							adoptForm: {
								...state.adoptForm,
								[groupName]: {
									...state.adoptForm[groupName],
									[subGroupName]: {
										...state.adoptForm[groupName][subGroupName],
										[e.target.name]: e.target.value
									}
								}
							}
						}
					} else {
						console.log('There was an error with the appForm reducer ):');
					}
					break;
				default:
					console.log('there was an error with the reducer');
				
			}
			break;
		case HANDLE_BOOL_CHANGE:
			return {
				...state,
				appForm: {
					...state.appForm,
					[action.payload.name]: action.payload.value
				}
			}
        case VIEW_BUNNIES:
            return {
                ...state,
                bunniesData: action.payload,
            }
        case CHOOSE_BUNNY_TO_EDIT:
            const { bunnyName, description, temperament, age, variation, imageLink, linkTo } = action.payload;
            return {
                ...state,
                form: {
                    bunnyName : bunnyName,
                    description : description,
                    temperament : temperament,
                    age : age,
                    variation : variation,
                    imageLink : imageLink,
					linkTo : linkTo,
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
        case LOGIN_ADMIN:
            return {
                ...state,
                loggedIn : true,
                login: {
                    userName: '',
                    password: '',
                },
                authKey: action.payload.data,
				isLoggedIn: true,
            }
        case LOGOUT_ADMIN:
            return {
                ...state,
                authKey: '',
                login: {
                    userName: '',
                    password: '',
                },
				isLoggedIn: false,
            }
		case VIEW_APPLICATIONS:
			return {
				...state,
				applications: action.payload
			}

        default: console.log('something went wrong in appReducer.js')
    }
}

export default reducer;