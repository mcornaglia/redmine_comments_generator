import React from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Description from './components/description/Description';
import Severity from './components/severity/Severity';
import Outcome from './components/outcome/Outcome';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 1,
      severity: "Critical",
      outcome: "Passed",
      description: "",
      redmineCode: ""
    }
    this.handleSeverityChange = this.handleSeverityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleOutcomeChange = this.handleOutcomeChange.bind(this);
    this.handleRowSubmit = this.handleRowSubmit.bind(this);
  }

  handleSeverityChange = event => {
    this.setState({severity: event.target.value})
  }

  handleDescriptionChange = event => {
    event.preventDefault();
    this.setState({ description: event.target.value })
  }
  
  handleOutcomeChange = event => {
    this.setState({outcome: event.target.value})
  }

  handleRowSubmit = () => {
    var redmineCode = "Test " + this.state.counterValue +  " - ";
    // Checking Severity
    if (this.state.severity === "Critical")
      redmineCode += "%{color: red}Critical%*" + " - "
    redmineCode += this.state.description;
    if (this.state.outcome === "Passed")
      redmineCode += "%{color: green}Passed%*" + " - "
    

    this.setState({
      redmineCode: redmineCode
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <Grid container spacing={1}>
            <Grid container item xs={1} spacing={1} justify="center" alignItems="center">
              <Counter value={this.state.counterValue} />
            </Grid>
            <Grid container item xs={2} spacing={1} justify="center" alignItems="baseline">
              <Severity 
                value={this.state.severity}
                handleSeverityChange={this.handleSeverityChange}
                severityTypes={["Critical", "High", "Medium", "Low"]}
              />
            </Grid>
            <Grid container item xs={7} spacing={1} justify="center" alignItems="baseline">
              <Description 
                value={this.state.description}
                handleDescriptionChange={this.handleDescriptionChange} 
              />
            </Grid>
            <Grid container item xs={2} spacing={1} justify="center" alignItems="baseline">
              <Outcome 
                value={this.state.outcome}
                handleOutcomeChange={this.handleOutcomeChange}
                outcomeTypes={["Passed", "Failed", "Untestable", "To be reviewed"]}
              />
            </Grid>
            <Grid container item xs={12} spacing={4} justify="center">
              <Button variant="contained" id="rowSubmit" onClick={this.handleRowSubmit}>Submit Row</Button>
            </Grid>
            <Grid container item xs={12} spacing={4} justify="center">
              <TextField 
                id="outlined-multiline-static"
                label="Redmine Code" 
                id="redmineBox" 
                variant="outlined" 
                multiline 
                rows="15" 
                value={this.state.redmineCode}
              />
            </Grid>
          </Grid>

        </div>
      </React.Fragment>
    );
  }
}

export default App;
