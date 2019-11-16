import React, { Component } from 'react';
import FeatureItem from './FeatureItem';

class Summary extends Component {

    


    render() {
        

        let wow = Object.keys(this.props.strat).map((feature, idx) => {
          return ( <FeatureItem 
          strat={this.props.strat}
          key={idx}
          feature={feature}
          idx={idx}
          /> )
            
          });
        
        return (
          <section>
            {wow}
            </section>
        );

        



};

}




export default Summary;