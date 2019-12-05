import React from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Description from './components/description/Description';
import Severity from './components/severity/Severity';
import Outcome from './components/outcome/Outcome';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
      severity: "Critical",
      outcome: "Passed",
      description: "",
      redmineCode: "",
      redmineCodePreview: "",
      redmineCodeTabular: "",
      redmineCodeTabularPreview: ""
    }
    this.handleSeverityChange = this.handleSeverityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleOutcomeChange = this.handleOutcomeChange.bind(this);
    this.handleRowSubmitOnEnterPress = this.handleRowSubmitOnEnterPress.bind(this);
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

  handleRowSubmitOnEnterPress = (e) => {
    if (e.key === 'Enter') {
      var counter = this.state.counterValue + 1
      var redmineCode = "*Test " + counter +  "* - ";
      var redmineCodePreview = "<b>Test " + counter + "</b> - ";
      var redmineCodeTabular = "| *" + counter + "*";
      var redmineCodeTabularPreview = `
      <tr>
        <td><b>` + counter + `</b></td>`;
      // Checking Severity
      switch (this.state.severity) {
        case "Critical":
          redmineCode += "*%{color: red}" + this.state.severity + "%*";
          redmineCodePreview += "<b><font color='red'>" + this.state.severity + "</font></b>";
          redmineCodeTabular += " | *%{color: red}" + this.state.severity + "%*";
          redmineCodeTabularPreview += "<td><b><font color='red'>" + this.state.severity + "</font></b></td>"
          break;
        case "High":
          redmineCode += "*%{color: orange}" + this.state.severity + "%*";
          redmineCodePreview += "<b><font color='orange'>" + this.state.severity + "</font></b>";
          redmineCodeTabular += " | *%{color: orange}" + this.state.severity + "%*";
          redmineCodeTabularPreview += "<td><b><font color='orange'>" + this.state.severity + "</font></b></td>"
          break;
        case "Medium":
          redmineCode += "*%{color: blue}" + this.state.severity + "%*"
          redmineCodePreview += "<b><font color='blue'>" + this.state.severity + "</font></b>";
          redmineCodeTabular += " | *%{color: blue}" + this.state.severity + "%*";
          redmineCodeTabularPreview += "<td><b><font color='blue'>" + this.state.severity + "</font></b></td>"
          break;
        case "Low":
          redmineCode += "*%{color: green}" + this.state.severity + "%*"
          redmineCodePreview += "<b><font color='green'>" + this.state.severity + "</font></b>";
          redmineCodeTabular += " | *%{color: green}" + this.state.severity + "%*";
          redmineCodeTabularPreview += "<td><b><font color='green'>" + this.state.severity + "</font></b></td>"
          break;
        default:
          break;
      }
      redmineCode += " - " + this.state.description + " - ";
      redmineCodePreview += " - " + this.state.description + " - ";
      redmineCodeTabular += " | " + this.state.description;
      redmineCodeTabularPreview += "<td>" + this.state.description + "</td>"
      // Checking Outcome
      switch (this.state.outcome) {
        case "Passed":
          redmineCode += "*%{color: green}" + this.state.outcome + "%*";
          redmineCodePreview += "<b><font color='green'>" + this.state.outcome + "</font></b>";
          redmineCodeTabular += " | *%{color: green}" + this.state.outcome + "%* |";
          redmineCodeTabularPreview += "<td><b><font color='green'>" + this.state.outcome + "</font></b></td></tr>"
          break;
        case "Failed":
          redmineCode += "*%{color: red}" + this.state.outcome + "%*"
          redmineCodePreview += "<b><font color='red'>" + this.state.outcome + "</font></b>";
          redmineCodeTabular += " | *%{color: red}" + this.state.outcome + "%* |";
          redmineCodeTabularPreview += "<td><b><font color='red'>" + this.state.outcome + "</font></b></td></tr>"
          break;
        case "Untestable":
          redmineCode += "*%{color: orange}" + this.state.outcome + "%*"
          redmineCodePreview += "<b><font color='orange'>" + this.state.outcome + "</font></b>";
          redmineCodeTabular += " | *%{color: orange}" + this.state.outcome + "%* |";
          redmineCodeTabularPreview += "<td><b><font color='orange'>" + this.state.outcome + "</font></b></td></tr>"
          break;
        case "To be Reviewed":
          redmineCode += "*%{color: purple}" + this.state.outcome + "%*"
          redmineCodePreview += "<b><font color='purple'>" + this.state.outcome + "</font></b>";
          redmineCodeTabular += " | *%{color: purple}" + this.state.outcome + "%* |";
          redmineCodeTabularPreview += "<td><b><font color='purple'>" + this.state.outcome + "</font></b></td></tr>"
          break;
        default:
          break;
      }
      
      this.setState({
        counterValue: counter,
        redmineCode: this.state.redmineCode + redmineCode + "\n" ,
        redmineCodePreview: this.state.redmineCodePreview + redmineCodePreview + "</br>",
        redmineCodeTabular: this.state.redmineCodeTabular === "" ? "|_. Test ID |_. Severity |_. Description |_. Outcome | \n" + redmineCodeTabular : this.state.redmineCodeTabular + "\n" + redmineCodeTabular,
        redmineCodeTabularPreview: (this.state.redmineCodeTabularPreview === "") ? 
        (`<table class="tabularPreviewTable">
          <tr>
            <th>Test ID</th>
            <th>Severity</th>
            <th>Description</th>
            <th>Outcome</th>
          </tr>` + redmineCodeTabularPreview) : (this.state.redmineCodeTabularPreview + redmineCodeTabularPreview),
        description: ""
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="app">
        <Grid container item xs={12} spacing={2} justify="center" alignItems="center">
          <h1 class="logoText">Redmine Code Generator</h1>
          {/* <img class="logo" src="\redmine.png" alt="My_Logo"></img> */}
        </Grid>
          <Grid container spacing={1}>
            <Grid container item xs={1} spacing={1} justify="center" alignItems="center">
              <Counter value={this.state.counterValue + 1} />
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
                handleRowSubmit={this.handleRowSubmitOnEnterPress}
              />
            </Grid>
            <Grid container item xs={2} spacing={1} justify="center" alignItems="baseline">
              <Outcome 
                value={this.state.outcome}
                handleOutcomeChange={this.handleOutcomeChange}
                outcomeTypes={["Passed", "Failed", "Untestable", "To be Reviewed"]}
              />
            </Grid>

            <Grid container item xs={12} spacing={4} justify="center" id="redmineCodeMultiline">
              <TextField 
                label={this.state.counterValue >= 1 ? "Redmine Code" : ""}
                placeholder={this.state.counterValue < 1 ? "Redmine's Standard Code will appear here . . ." : ""}
                id="redmineBox" 
                variant="outlined" 
                multiline 
                rows={(this.state.counterValue)} 
                value={this.state.redmineCode}
              ></TextField>
            </Grid>

            <Grid container item xs={12} id="redmineCodePreview">
              <div dangerouslySetInnerHTML={{__html: this.state.redmineCodePreview}} />
            </Grid>

            <Grid container item xs={12} spacing={4} justify="center" id="redmineCodeMultiline">
              <TextField 
                label={this.state.counterValue >= 1 ? "Redmine Code Tabular" : ""}
                placeholder={this.state.counterValue < 1 ? "Redmine's Tabular Code will appear here . . ." : ""}
                id="redmineBox" 
                variant="outlined" 
                multiline 
                rows={(this.state.counterValue+1)} 
                value={this.state.redmineCodeTabular}
              ></TextField>
            </Grid>

            <Grid container item xs={12} id="redmineCodeTabularPreview">
              <div dangerouslySetInnerHTML={{__html: this.state.redmineCodeTabularPreview}} />
            </Grid>

          </Grid>

        </div>
      </React.Fragment>
    );
  }
}

export default App;
