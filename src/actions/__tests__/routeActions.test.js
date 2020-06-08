import { 
	ADD_POINT,
  UPDATE_POINT_COORDS,
  REMOVE_POINT,
	CHANGE_ROUTE,
	addPoint, 
	updatePointCoords, 
	removePoint, 
	changeRoute
} from '../route';

describe('Route actions',() => {
	it ('Add new point to the route', () => {
		const expectedAction  = { 
			type: ADD_POINT,
			data: {
				id: 'id1',
				name: 'Point 1',
				coords: [55.76, 37.64]
			}
		};
		const data = {
			id: 'id1',
			name: 'Point 1',
			coords: [55.76, 37.64]
		}
		
		expect(addPoint(data)).toEqual(expectedAction);
	});

	it('Update point coordinates', () => {
		const expectedAction = {
				type: UPDATE_POINT_COORDS,
				data: { id: 'id1', coords: [55.155, 37.155] }
		};

		expect(updatePointCoords('id1', [55.155, 37.155])).toEqual(expectedAction);
	});

	it('Remove point from route', () => {
		const expectedAction = {
				type: REMOVE_POINT,
				data: 'id1'
		};
		
		expect(removePoint('id1')).toEqual(expectedAction);
	});

	it('Change route', () => {
		const data = {
			id: 'id1',
			name: 'name',
			coords: [55.155, 37.155]
		}
		const expectedAction = {
				type: CHANGE_ROUTE,
				data: {
					id: 'id1',
					name: 'name',
					coords: [55.155, 37.155]
				}
		};
		
		expect(changeRoute(data)).toEqual(expectedAction);
	});
});