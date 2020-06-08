import reducer from '../route';
import {
  ADD_POINT,
  UPDATE_POINT_COORDS,
  REMOVE_POINT,
  CHANGE_ROUTE
} from '../../actions/route';

describe('Route reducers:', () => {
  const initState = [
    { 
      id: 'id1', 
      name: 'name1', 
      coords: [55.155, 37.155] 
    }
  ];

  it('ADD_POINT', () => {
    const action = { 
      type: ADD_POINT,
      data: { 
        id: 'id2', 
        name: 'name2', 
        coords: [75.155, 27.155] 
      }
    };
    const expectedData = [ 
      { 
        id: 'id1', 
        name: 'name1', 
        coords: [55.155, 37.155] 
      },
      { 
        id: 'id2', 
        name: 'name2', 
        coords: [75.155, 27.155] 
      } 
    ];

    expect(reducer(initState, action)).toEqual(expectedData);
  });

  it('UPDATE_POINT_COORDS', () => {
    const action = {
      type: UPDATE_POINT_COORDS,
      data: { 
        id: 'id1', 
        name: 'name1', 
        coords: [75.155, 27.155] 
      }
    };
    const expectedData =  [ 
      { 
        id: 'id1', 
        name: 'name1', 
        coords: [75.155, 27.155] 
      } 
    ];
  
    expect(reducer(initState, action)).toEqual(expectedData);
  })

  it('REMOVE_POINT', () => {
    const action = { 
      type: REMOVE_POINT, 
      data: 'id1' 
    };
    const initState = [ 
      { 
        id: 'id1', 
        name: 'name1', 
        coords: [55.155, 37.155] 
      },
      { 
        id: 'id2', 
        name: 'name2', 
        coords: [75.155, 27.155] 
      } 
    ];
    const expectedData =  [ 
      { 
        id: 'id2', 
        name: 'name2', 
        coords: [75.155, 27.155] 
      } 
    ];

    expect(reducer(initState, action)).toEqual(expectedData);
  })

  it('CHANGE_ROUTE', () => {
    const action = {
      type: CHANGE_ROUTE,
      data: [{ 
        id: 'id2', 
        name: 'name2',
        coords: [75.155, 27.155] 
      },
      { 
        id: 'id1', 
        name: 'name1', 
        coords: [55.155, 37.155] 
      }]
    }
    const initState = [ 
      { 
        id: 'id1', 
        name: 'name1', 
        coords: [55.155, 37.155] 
      },
      { 
        id: 'id2', 
        name: 'name2',
        coords: [75.155, 27.155] 
      } 
    ];

    expect(reducer(initState, action)).toEqual(action.data);
  })
});