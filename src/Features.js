import React, { Component } from 'react';
import slugify from 'slugify';



class Features extends Component {

    


    render() {
        const featz = Object.keys(this.props.features).map((feature, idx) => {
      
            const featureHash = feature + '-' + idx;
            console.log(this.props.features[feature]);
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.state.selected[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
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