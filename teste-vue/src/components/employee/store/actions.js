import axios from 'axios'
// import consts from '@/utils/consts'
// import get from 'lodash/get'

// API fake = https://my-json-server.typicode.com/robertokomessu/fakeapi/employees_list
// const INITIAL_EMPLOYEES = [
//   [
//     {
//       id: 0,
//       name: "Roberto",
//       email: "robertokomessu@gmail.com",
//       salary: "$27.28",
//       admission: "11/01/2007"
//     },
//     {
//       id: 1,
//       name: "Ellene",
//       email: "ehanbidge0@chronoengine.com",
//       salary: "$9.51",
//       admission: "04/26/2011"
//     },
//     {
//       id: 2,
//       name: "Donelle",
//       email: "dgreenroad1@nbcnews.com",
//       salary: "$4.16",
//       admission: "12/12/2008"
//     },
//     {
//     id: 3,
//       name: "Lona",
//       email: "loglessane2@e-recht24.de",
//       salary: "$3.47",
//       admission: "04/02/2015"
//     },
//     {
//       id: 4,
//       name: "Andy",
//       email: "agrayne3@baidu.com",
//       salary: "$9.14",
//       admission: "08/08/2013"
//     }
//   ]
// ]

const setEmployees = ({ commit }) => {

  if(!window.localStorage.getItem('employees') || window.localStorage.getItem('employees').length === 0){
    return axios.get(`https://my-json-server.typicode.com/robertokomessu/fakeapi/employees_list`,
    {
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      commit('SET_EMPLOYEES', res.data)
    })
  }else{
    let local = JSON.parse(window.localStorage.getItem('employees'))
    commit('SET_EMPLOYEES', local)
  }
}

const insertEmployee = ({ commit }, obj) => {
  let local = window.localStorage.getItem('employees') && window.localStorage.getItem('employees').length > 0 ? 
  JSON.parse(window.localStorage.getItem('employees')) : ''

  obj.id = local.length > 0 ? local.length : 0
  local.push(obj)
  commit('INSERT_EMPLOYEE', local)
}

const removeEmployee = ({commit}, obj) => {
  try{
    let local = window.localStorage.getItem('employees') && window.localStorage.getItem('employees').length > 0 ? 
    JSON.parse(window.localStorage.getItem('employees')) : ''
    local = local.filter((item,index) => {
      return (obj.id !== item.id)
    })
    commit('REMOVE_EMPLOYEE', local)
  }
  catch(err){
    commit('LOGOUT')
  }
}

const logout = ({commit}, id) => {
  commit('LOGOUT')
}

export default {
    setEmployees,
    insertEmployee,
    removeEmployee,
}