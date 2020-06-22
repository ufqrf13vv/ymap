const ADD_POINT = 'ADD_POINT';
const UPDATE_POINT_COORDS = 'UPDATE_POINT_COORDS';
const REMOVE_POINT = 'REMOVE_POINT';
const CHANGE_ROUTE = 'CHANGE_ROUTE';

export const addPoint = point => {
  return {
    type: ADD_POINT,
    data: point
  }
}

export const updatePointCoords = (id, coords) => {
  return {
    type: 'UPDATE_POINT_COORDS',
    data: { 
      id, 
      coords 
    }
  }
};

export const removePoint = id => {
  return {
    type: REMOVE_POINT,
    data: id
  }
}

export const changeRoute = route => {
  return {
    type: CHANGE_ROUTE,
    data: route
  }
}

export const centerCoords = () => [55.76, 37.64];

export {
  ADD_POINT,
  UPDATE_POINT_COORDS,
  REMOVE_POINT,
  CHANGE_ROUTE
}