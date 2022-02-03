const state = {
    todos: [
        {
            id:1,
            title:"Go to shop"
        },
        {
            id:2,
            title:"Buy the horse"
        }
    ]
}

const getters = {
    allTodos: (state) => state.todos,
    thisTodo: (state) => todoId => {
        return state.todos.find(todo => todo.id === todoId);
    },
}

const actions = {}

const mutations = {
    deleteTodo: (state, todoId) => {
        let todoIndex = state.todos.indexOf(
            getters.thisTodo(todoId)
        );
        state.todos.splice(todoIndex, 1);
        delete state.todos[todoIndex].text;
        console.log(state.todos[todoIndex]);
    },
    addTodo: (state, todoText) => {
        state.todos.push({
            id: state.todos.slice(-1)[0].id + 1,
            title: todoText
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}