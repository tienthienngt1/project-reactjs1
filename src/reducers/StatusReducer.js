
const StatusReducer = (state, action) => {
    const {type, payload:{...rest}} = action
    switch (type) {
        default:
            return {...state}
    }
}
export default StatusReducer