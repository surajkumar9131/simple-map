export default function(state = null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "USER_LIST":
      return action.payload;
    case "STATUS":
      return action.payload;
    default:
      return state;
  }
}
