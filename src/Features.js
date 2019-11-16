import React, { Component } from 'react';
import Options from './Options';



class Features extends Component {

    


    render() {
        const featz = Object.keys(this.props.features).map((feature, idx) => {
      
            const featureHash = feature + '-' + idx;
            
           
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <Options 
                features={this.props.features}
                feature={feature}
                state={this.props.state}
                USCurrencyFormat={this.props.USCurrencyFormat}
                handleUpdate={this.props.handleUpdate}
                />
              </fieldset>
            );
          });

          return (
              <div>
              {featz}
                </div>              

          );

          

    }






}

export default Features;