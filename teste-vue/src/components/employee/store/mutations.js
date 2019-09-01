const SET_EMPLOYEES = (state, obj) => {
  state.employees = obj;
  window.localStorage.setItem("employees", JSON.stringify(obj))
};

const REMOVE_EMPLOYEE = (state, obj) => {
  state.employees = obj;
  window.localStorage.setItem("employees", JSON.stringify(obj))
};

const INSERT_EMPLOYEE = (state, obj) => {
  state.employees = obj;
  window.localStorage.setItem("employees", JSON.stringify(obj))
};

// const FETCHING_EMPLOYEES = (state, obj) => {
//   state.fetching_employees = true;
// };

// const REMOVE_SUCCESS_ALERT = (state, obj) => {
//   state.success_alert = false;
// };

// const INSERT_EMPLOYEE_ERROR = (state, obj) => {
//   state.inserting_employee = false;
//   state.error_alert = true;
// };

// const REMOVE_ERROR_ALERT = (state, obj) => {
//   state.error_alert = false;
// };


// const SET_EMPLOYEE = (state, obj) => {
//   state.employees = obj;
// };

// const UPDATING_EMPLOYEE = (state, obj) => {
//   state.updating_employee = true;
// };

// const UPDATE_EMPLOYEE = (state, obj) => {
//   state.updating_employee = false;
//   state.update_success = true;
// };

// const UPDATE_EMPLOYEE_ERROR = (state, obj) => {
//   state.updating_employee = false;
//   state.update_error = true;
// };

// const REMOVE_ERROR_ALERT_UPDATE = (state, obj) => {
//   state.update_error = false;
// };

// const REMOVE_SUCCESS_ALERT_UPDATE = (state, obj) => {
//   state.update_success = false;
// };

export default {
  SET_EMPLOYEES,
  INSERT_EMPLOYEE,
  REMOVE_EMPLOYEE,
  // FETCHING_EMPLOYEES,
  // INSERTING_EMPLOYEE,
  // REMOVE_SUCCESS_ALERT,
  // INSERT_EMPLOYEE_ERROR,
  // REMOVE_ERROR_ALERT,
  // SET_EMPLOYEE,
  // UPDATING_EMPLOYEE,
  // UPDATE_EMPLOYEE,
  // UPDATE_EMPLOYEE_ERROR,
  // REMOVE_ERROR_ALERT_UPDATE,
  // REMOVE_SUCCESS_ALERT_UPDATE
};
