import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { addPoint, removePoint, changeRoute, centerCoords } from '../../actions/route';
import { reorderListItems } from '../../utils';

import './style.css';

class Route extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onSearchChange = event => {
    this.setState({ search: event.target.value });
  }

  onKeyPress = event => {
    const { points, addPoint, center } = this.props;
    const { search } = this.state;
    
    if (event.key === 'Enter') {
      if (!search.length) {
        alert('Вы не ввели название точки маршрута!');
        return;
      }
  
      if (points.map(point => point.name).includes(search)) {
        alert('Точка маршрута с таким именем уже существует!');
        return;
      }

      addPoint({
        id: `f${(~~(Math.random()*1e8)).toString(16)}`,
        name: search,
        coords: center
      });
      
      this.setState({ search: '' });
    }
  }

  onClickRemove = id => {
    this.props.removePoint(id);
  }

  onDragEnd(result) {
    const { points, changeRoute } = this.props;

    if (!result.destination) {
      return;
    }

    const items = reorderListItems(
      points,
      result.source.index,
      result.destination.index
    );

    changeRoute(items);
  }

  render() {
    const { points } = this.props;

    return (
      <div className="route">
        <input 
          className="route__search" 
          type="text" 
          id="search" 
          onChange={this.onSearchChange} 
          onKeyPress={this.onKeyPress}
          placeholder="Новая точка маршрута"
          value={this.state.search}
        />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <div className="route__list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {points.map((point, index) => (
                  <Draggable key={point.id} draggableId={point.id} index={index}>
                    {provided => (
                      <div 
                        className="route__list-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {point.name}
                        <button 
                          className="route__remove" 
                          onClick={() => this.onClickRemove(point.id)}
                        >
                          X
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  points: state.route,
  center: centerCoords(state)
});

const mapDispatchToProps = {
  addPoint,
  removePoint,
  changeRoute
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route);