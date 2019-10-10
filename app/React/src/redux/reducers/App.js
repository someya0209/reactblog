import { LOCATION_CHANGE } from 'connected-react-router';


let initialState = {
  userInfo: {},
  pages: [],
  drawerOpened: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // connected-react-routerがページ遷移時にdispatchするaction
    case LOCATION_CHANGE: {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 200);
        return {
          ...state,
        };
    }
    default:
      return state;
  }
}
