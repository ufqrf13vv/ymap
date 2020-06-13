import React, { Component } from 'react';
import { connect } from 'react-redux';

import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import { centerCoords, updatePointCoords } from '../../actions/route';

import './style.css';

class MainMap extends Component {

  onPlacemarkDrag = (id, newCoords) => {
    this.props.updatePointCoords(id, newCoords);
  }

  render() {
    const { points, center } = this.props;
    const mapState = {
      center: center,
      zoom: 10
    };

    return (
      <div className="map-wrapper">
        <YMaps>
          <Map 
            defaultState={mapState} 
            width='100%' 
            height='100%'
          >
            {points.map((point, index) => {
              return (
                <Placemark 
                  key={index}
                  geometry={point.coords}
                  properties={{ balloonContent: point.name }}
                  options={{ iconColor: '#072f18', draggable: true }}
                  modules={[ 'geoObject.addon.balloon', 'geoObject.addon.hint' ]}
                  onDragend={event => {
                    this.onPlacemarkDrag(
                      point.id, 
                      event.originalEvent.target.geometry.getCoordinates()
                    );
                  }}
                />
              )
            })}
            <Polyline 
              geometry={points.map(point => point.coords)} 
              options={{ strokeColor: '#6a7a00', strokeWidth: 2 }}
            />
          </Map>
        </YMaps> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  points: state.route,
  center: centerCoords(state)
});

const mapDispatchToProps = {
  updatePointCoords
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMap);