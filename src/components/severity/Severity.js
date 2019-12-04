import React from 'react';
import Select from '@material-ui/core/Select';
import './Severity.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

class Severity extends React.Component {
    render() {
        return (
            <div className="severity">
                <FormControl className="severityMenu">
                    <InputLabel id="label">Severity</InputLabel>
                    <Select
                        labelId="label"
                        id="severitySelect"
                        value={this.props.value}
                        onChange={this.props.handleSeverityChange}
                    >
                        {this.props.severityTypes.map(sev => {
                            return (<MenuItem key={sev} value={sev}>{sev}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default Severity;
