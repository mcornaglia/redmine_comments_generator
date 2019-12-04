import React from 'react';
import Select from '@material-ui/core/Select';
import './Outcome.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

class Outcome extends React.Component {
    render() {
        return (
            <div className="outcome">
                <FormControl className="outcomeMenu">
                    <InputLabel id="label">Outcome</InputLabel>
                    <Select
                        labelId="label"
                        value={this.props.value}
                        onChange={this.props.handleOutcomeChange}
                    >
                        {this.props.outcomeTypes.map(otc => {
                            return (<MenuItem key={otc} value={otc}>{otc}</MenuItem>)
                        })}
                    </Select>
                    
                </FormControl>
            </div>
        );
    }
}

export default Outcome;
