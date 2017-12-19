const R = require('ramda');

const initialState = {
  artists: "",
  albums: "",
  artistalbums: "",
  config: "",
  reviews: "",
  writereview: "",
  redirectbutton: "false",
  recentreviews: "",
  loggedIn: "false"
}

const reducer = (state= initialState, action) => {
  switch (action.type) {
    case 'LOAD_ALBUM':
      const A = R.compose(
        R.assocPath([action.field], action.payload))(state)
      return A

    case 'LOAD_ARTIST':
      const B = R.compose(
        R.assocPath([action.field], action.payload))(state)
      return B

    case 'CHANGE_REDIRECT':
      const C = R.compose(
        R.assocPath([action.field], action.payload))(state)
      return C

    case 'LOAD_REVIEWS':
      const D = R.compose(
        R.assocPath([action.field], action.payload))(state)
      return D

    case 'WRITE_REVIEW':
      const E = R.compose(
        R.assocPath([action.field], action.payload))(state)
      return E

    case 'RECENT_REVIEWS':
      const F = R.compose(
        R.assocPath([action.field], action.payload))(state)
      return F

    default: return state;
  }

}

export {reducer};
