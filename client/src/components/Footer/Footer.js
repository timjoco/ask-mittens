import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import styles from './footerStyle';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <List className={classes.inlineBlock}>
            <ListItem>
              <div>
                @{new Date().getFullYear()} {''} || Created by Tim O'Connor
                {''}
              </div>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/timjoco"
                className={classes.block}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/timjoco/"
                className={classes.block}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
