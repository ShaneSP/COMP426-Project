{div, p} = React.DOM

LEFT_BUTTON = 0
DRAG_THRESHOLD = 3 # pixels

document.addEventListener 'DOMContentLoaded', ->
  React.renderComponent Example(), document.body

Example = React.createClass
  getInitialState: ->
    currentDragItem: null

  render: ->
    div
      className: "dnd-example #{'dragging' if @state.currentDragItem}"
      children: [
        SourceObjects
          onDragStart: @onDragStart
          onDragStop: @onDragStop
        DropTargets
          currentDragItem: @state.currentDragItem
          onDrop: @onDrop
        @dropDescription()
      ]

  onDragStart: (details) ->
    @setState currentDragItem: details

  onDragStop: ->
    @setState currentDragItem: null

  onDrop: (target) ->
    @setState lastDrop:
      source: @state.currentDragItem
      target: target

  dropDescription: ->
    if drop = @state.lastDrop
      p
        className: 'drop-description'
        children: "Dropped source #{drop.source.type}-#{drop.source.index} on target #{drop.target.index}"

SourceObjects = React.createClass
  render: ->
    div
      className: 'dnd-source-objects'
      children: for object, i in @objects()
        SourceObject
          type: object.type
          index: i + 1
          children: i + 1
          onDragStart: @props.onDragStart
          onDragStop: @props.onDragStop

  objects: ->
    _.flatten [
      { type: 'green' } for i in [0..2]
      { type: 'blue' } for i in [0..2]
    ]

SourceObject = React.createClass
  render: ->
    Draggable
      className: "dnd-source-object #{@props.type}"
      children: @props.children
      onDragStart: @props.onDragStart
      onDragStop: @props.onDragStop
      dragData: @dragData

  dragData: ->
    type: @props.type
    index: @props.index

Draggable = React.createClass
  getInitialState: ->
    mouseDown: false
    dragging: false

  render: ->
    @transferPropsTo div
      style: @style()
      className: "dnd-draggable #{'dragging' if @state.dragging}"
      children: @props.children
      onMouseDown: @onMouseDown

  style: ->
    if @state.dragging
      position: 'absolute'
      left: @state.left
      top: @state.top
    else
      {}

  onMouseDown: (event) ->
    if event.button == LEFT_BUTTON
      event.stopPropagation()
      @addEvents()
      pageOffset = @getDOMNode().getBoundingClientRect()
      @setState
        mouseDown: true
        originX: event.pageX
        originY: event.pageY
        elementX: pageOffset.left
        elementY: pageOffset.top

  onMouseMove: (event) ->
    deltaX = event.pageX - @state.originX
    deltaY = event.pageY - @state.originY
    distance = Math.abs(deltaX) + Math.abs(deltaY)

    if !@state.dragging and distance > DRAG_THRESHOLD
      @setState dragging: true
      @props.onDragStart? @props.dragData?()

    if @state.dragging
      @setState
        left: @state.elementX + deltaX + document.body.scrollLeft
        top: @state.elementY + deltaY + document.body.scrollTop

  onMouseUp: ->
    @removeEvents()
    if @state.dragging
      @props.onDragStop()
      @setState dragging: false

  addEvents: ->
    document.addEventListener 'mousemove', @onMouseMove
    document.addEventListener 'mouseup', @onMouseUp

  removeEvents: ->
    document.removeEventListener 'mousemove', @onMouseMove
    document.removeEventListener 'mouseup', @onMouseUp

DropTargets = React.createClass
  render: ->
    div
      className: 'dnd-drop-targets'
      children: for target, i in @targets()
        DropTarget
          target: target
          index: i
          currentDragItem: @props.currentDragItem
          onDrop: @props.onDrop

  targets: ->
    [
      { accepts: ['blue'] }
      { accepts: ['green'] }
      { accepts: ['blue', 'green'] }
      { accepts: [] }
    ]

DropTarget = React.createClass
  getInitialState: ->
    hover: false

  render: ->
    div
      className: @classes()
      children: 'accepts ' + @acceptsDescription()
      onMouseEnter: => @setState hover: true
      onMouseLeave: => @setState hover: false
      onMouseUp: @onDrop

  classes: ->
    [
      'dnd-drop-target'
      "#{@props.target.accepts.join ' '}"
      'active' if @active()
      'active-green' if @active() and @props.currentDragItem.type == 'green'
      'active-blue' if @active() and @props.currentDragItem.type == 'blue'
      'disabled' if @disabled()
      'hover' if @state.hover
    ].join ' '

  active: ->
    item = @props.currentDragItem
    item and item.type in @props.target.accepts

  disabled: ->
    item = @props.currentDragItem 
    item and item.type not in @props.target.accepts

  acceptsDescription: ->
    if @props.target.accepts.length > 0
      @props.target.accepts.join ' & '
    else
      'nothing'

  onDrop: ->
    if @active()
      @props.onDrop? index: @props.index + 1