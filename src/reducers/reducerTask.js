const initialSession = {
    tasks: [
        {
            taskName: "Send mail",
            taskDescription: "send mail to manager",
            time: "Sat Mar 16 2019 17: 00: 00 GMT+0530(India Standard Time)",
            date: "2019-03-16"
        },
        {
            taskName: "Take Test",
            taskDescription: "Take 1st round interview test",
            time: "Sat Mar 16 2019 19: 00: 00 GMT+0530(India Standard Time)",
            date: "2019-03-16"
        },
        {
            taskName: "Push Code",
            taskDescription: "Push code to repo",
            time: "Sat Mar 17 2019 18: 00: 00 GMT+0530(India Standard Time)",
            date: "2019-03-17"
        },
        {
            taskName: "Distribute task",
            taskDescription: "Distribute task to team members",
            time: "Sun Mar 17 2019 19: 30: 00 GMT+0530(India Standard Time)",
            date: "2019-03-17"
        },
        {
            taskName: "Tax Filing",
            taskDescription: "The due date for filing returns is on Monday, 15 April ",
            time: "Sun Mar 18 2019 10: 30: 00 GMT+0530(India Standard Time)",
            date: "2019-03-18"
        }
    ]

}

const session = (state = initialSession, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]

            }
            break;


        default:
            return {
                ...state,
            }
            break;
    }
}

module.exports = session;