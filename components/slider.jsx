var Slider = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  componentDidMount:function() {

  },

  handleChange:function() {
      this.props.update(event.target);
  },

  render: function(){
    return (
        <span>
            <span className="display"><b>{this.props.label}</b> : Used {this.props.required}</span>
            <input id={this.props.name}
                    name={this.props.name}
                    className="slider"
                    onChange={this.handleChange}
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    step="1" />
            <span className="display">{this.props.value}</span>
            <div>{this.props.message}</div>
        </span>
    )
  }
});
