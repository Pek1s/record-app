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
    case 'CHANGE_DATA':
      const A = R.compose(
        R.assocPath([action.field], action.payload))(state)
      return A

    default: return state;
  }

}

export {reducer};
