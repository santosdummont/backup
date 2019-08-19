import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';

class Home extends React.Component {
    render() {
        const {
            data
        } = this.props;
        return (
            <div>
               {data.map((page) => {
                   if (page) {
                       return page.sections.map((section, index) => <Section key={index} data={section}/>)
                   }
                   return null 
               })}
            </div>
        );
    }
}

export default Home;