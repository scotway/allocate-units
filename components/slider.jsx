var Slider = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  componentDidMount:function() {

  },

  handleChange:function(event) {
      this.props.update(event.target);
  },

  render: function(){
    return (
        <tr>
            <td className="display">{this.props.label}</td>
            <td className="student-count">{this.props.required} students</td>
            <td><input id={this.props.name}
                      name={this.props.name}
                      className="slider"
                      onChange={this.handleChange}
                      type="range"
                      min={this.props.min}
                      max={this.props.max}
                      value={this.props.value}
                      step="1" />
            </td>
            <td className="amount">{this.props.value}</td>
        </tr>
    )
  }
});
