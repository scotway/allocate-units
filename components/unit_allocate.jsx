var UnitAllocate = React.createClass({
  getInitialState: function() {
    return {
        teacher1Value:26,
        teacher1Used:12,
        teacher2Value:20,
        teacher2Used:15,
        teacher3Value:22,
        teacher3Used:10,
        total:68,
        message:""
    };
  },

  componentDidMount:function() {

  },

  updateUnits:function(target) {
      var name = target.name + "Value";
      var value = parseInt(target.value);

      var total = parseInt(this.state.teacher1Value) + parseInt(this.state.teacher2Value) + parseInt(this.state.teacher3Value);
      if(total <= 100) {
          switch (name) {
              case "teacher1Value":
                    if(target.value >= this.state.teacher1Used) {
                        var total = parseInt(value) + parseInt(this.state.teacher2Value) + parseInt(this.state.teacher3Value);
                        if(total <= 100) {
                            this.setState({teacher1Value: value});
                            this.setState({message: ""});
                            this.setState({total: total});
                        } else {
                            this.setState({message: "Can't assign anymore"});
                        }
                    } else {
                        this.setState({message: "Can't remove anymore"});
                    }
                  break;
              case "teacher2Value":
                    if(target.value >= this.state.teacher2Used) {
                        var total = parseInt(value) + parseInt(this.state.teacher1Value) + parseInt(this.state.teacher3Value);
                        if(total <= 100) {
                            this.setState({teacher2Value: value});
                            this.setState({message: ""});
                            this.setState({total: total});
                        } else {
                            this.setState({message: "Can't assign anymore"});
                        }
                    } else {
                        this.setState({message: "Can't remove anymore"});
                    }
                  break;
              case "teacher3Value":
                    if(target.value >= this.state.teacher3Used) {
                        var total = parseInt(value) + parseInt(this.state.teacher1Value) + parseInt(this.state.teacher2Value);
                        if(total <= 100) {
                            this.setState({teacher3Value: value});
                            this.setState({message: ""});
                            this.setState({total: total});
                        } else {
                            this.setState({message: "Can't assign anymore"});
                        }
                    } else {
                        this.setState({message: "Can't remove anymore"});
                    }
                  break;
              default:

          }
          //this.setState({total: total});
      }
  },

  render: function(){
    return (
      <div>
        <div>Current Assigned : {this.state.total}</div>
        <Slider label="Teacher One" name="teacher1" update={this.updateUnits} required={this.state.teacher1Used} min="0" max="100" value={this.state.teacher1Value} />
        <Slider label="Teacher Two" name="teacher2" update={this.updateUnits} required={this.state.teacher2Used} min="0" max="100" value={this.state.teacher2Value} />
        <Slider label="Teacher Three" name="teacher3" update={this.updateUnits} required={this.state.teacher3Used} min="0" max="100" value={this.state.teacher3Value} />
        <div>{this.state.message}</div>
      </div>
    )
  }
});
