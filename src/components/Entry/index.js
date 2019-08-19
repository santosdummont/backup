import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Entry extends React.Component {
    render() {
        const {
            title,
            subtitle,
            image,
            link,
            content,
            languages,
        } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.title}>{title}</div>
                {subtitle}
                <img src={image} alt={title} />
                {link}
                {content}
                {languages && languages.map((language, index) => {
                    switch (language.name) {
                        case 'css':
                            return <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png' alt={language.name} />
                        case 'html5':
                            return <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png' alt={language.name} />
                        default: return null
                    }
                }
                )}
            </div>
        );
    }
}



export default Entry;