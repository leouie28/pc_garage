import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const module = {
    state: {
        active_route_child: null,
        active_route_parent: null,
        active_route: null,
        toaster: [],
        query:[],
    },
    getters: {
        active_route_child: state => state.active_route_child,
        active_route_parent: state => state.active_route_parent,
        active_route: state => state.active_route,
        toaster: state => state.toaster,
        query: state => state.query.map((param) => {
            return `${param.field}=${param.value}`
        }).join('&'),
    },
    mutations: {
        active_route_child(state, value) {
            state.active_route_child = value;
        },
        active_route_parent(state, value) {
            state.active_route_parent = value;
        },
        active_route(state, value) {
            alert('test');
            state.active_route = value;
        },
        
        SET_PARAMS(state, value = '') {
            let isParamsExist = false
    
            // reset query if route has changed
            if (value.reset) {
                state.query = [
                    { field:'page', value:1 }
                ]
                return
            }
    
            // remove key if page is remove key is true
            if (value.remove) {
                let index = state.query.findIndex(param => param.field == value.field)
                
                if (index > 0) {
                    state.query.splice(index, 1)
                }
                return
            }
    
            // check if params is already in query, then update
            state.query.forEach(param => {
                if (param.field == value.field) {
                    if (param.field == 'sortBy') { // these lines of codes are for table sort by functions
                        let originalVal = value.value.split('%')[0]
                        let sortParams = param.value.split(',')
                        let filterAscIndex = sortParams.indexOf(`${originalVal}%A`)
                        let filterDscIndex = sortParams.indexOf(`${originalVal}%D`)
    
                        if (filterAscIndex > - 1) sortParams.splice(filterAscIndex, 1)
                        if (filterDscIndex > - 1) sortParams.splice(filterDscIndex, 1)
    
                        param.value = sortParams.join(',')
    
                        if (value.value.split('%').length < 2) {
                            isParamsExist = true
                            return
                        }
                       
                        if (!param.value.split(',').includes(value.value)) {
                            param.value = `${param.value},${value.value}`
                        } else {
                            let sortParams = param.value.split(',')
                            let paramValIndex = sortParams.indexOf(value.value)
    
                            sortParams.splice(paramValIndex, 1)
                            param.value = sortParams.join(',')
                        }
                    } else {
                        param.value = value.value
                    }
                    isParamsExist = true
                }
            });
    
            if (value != '' && !isParamsExist) {
                state.query.push(value)
            }
        },
    },
};

export const store = new Vuex.Store({
    strict: true,
    modules: {
        module
    }
});