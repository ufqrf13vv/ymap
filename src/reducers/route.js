import { 
  ADD_POINT,
  UPDATE_POINT_COORDS,
  REMOVE_POINT,
  CHANGE_ROUTE,
} from '../actions/route';

const route = (state = [], action) => {
  switch (action.type) {
    case ADD_POINT:
      return [
        ...state,
        action.data
      ];

    case UPDATE_POINT_COORDS:
      return state.map(point => point.id === action.data.id 
        ? point = { ...point, coords: action.data.coords } 
        : point);

    case REMOVE_POINT:
      return state.filter(item => item.id !== action.data);

    case CHANGE_ROUTE:   
      return action.data;
      
    default:
      return state;
  }
}

export default route;