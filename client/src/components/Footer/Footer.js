import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './footerStyle';
import butterLogo from '../../assets/butter-b.png';

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
            <ListItem className={classes.inlineBlock}>
              <div className={classes.block}>
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
            <ListItem className={classes.inlineBlock}>
              <a href="/privacy" className={classes.block}>
                privacy policy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/terms" className={classes.block}>
                terms of service
              </a>
            </ListItem>
          </List>
          <List>
            <a
              href="https://buttercms.com/"
              className={classes.block}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={butterLogo} alt="Butter Logo" width="20%" />
            </a>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
