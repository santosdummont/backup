import React from 'react';
import PropTypes from 'prop-types';
import Entry from 'components/Entry';
import styles from './styles.scss';


class Section extends React.Component {

  render() {
    const {
      data
    } = this.props;

    const entries = data.entries && data.entries.map((entry, index) => (
      <Entry
        key={index}
        title={entry.title}
        subtitle={entry.subtitle}
        image={entry.image}
        content={entry.content}
        link={entry.link}
        languages={entry.languages}
      />
    ));
    return (
      <div className={styles.container}>
        {entries}
      </div>
    );
  }
}

export default Section;