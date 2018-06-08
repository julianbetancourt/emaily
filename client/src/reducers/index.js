import { combineReducers } from 'redux'
import authReducer from './authReducers'
import { reducer as reduxForm } from 'redux-form'
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
})
