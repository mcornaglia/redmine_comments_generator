import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Description.css';

class Description extends React.Component {
    render() {      
        return (
            <div className="description">                
                <TextField 
                    id="test-description" 
                    label="Insert your description . . ." 
                    variant="outlined" 
                    type="text" 
                    value={this.props.value} 
                    onChange={this.props.handleDescriptionChange}
                />
            </div>
        );
    }
}

export default Description;
