import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function WelcomeContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#B19CD9' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          auctor molestie tortor sed euismod. Duis at arcu hendrerit,
          ullamcorper tortor nec, dapibus ex. Praesent posuere, mauris non
          imperdiet blandit,Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aliquam auctor molestie tortor sed euismod. Duis at arcu
          hendrerit, ullamcorper tortor nec, dapibus ex. Praesent posuere,
          mauris non imperdiet blandit,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam auctor molestie tortor sed euismod. Duis at
          arcu hendrerit, ullamcorper tortor nec, dapibus ex. Praesent posuere,
          mauris non imperdiet blandit,
        </TabPanel>
        <TabPanel value={value} index={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          auctor molestie tortor sed euismod. Duis at arcu hendrerit,
          ullamcorper tortor nec, dapibus ex. Praesent posuere, mauris non
          imperdiet blandit,Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aliquam auctor molestie tortor sed euismod. Duis at arcu
          hendrerit, ullamcorper tortor nec, dapibus ex. Praesent posuere,
          mauris non imperdiet blandit,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam auctor molestie tortor sed euismod. Duis at
          arcu hendrerit, ullamcorper tortor nec, dapibus ex. Praesent posuere,
          mauris non imperdiet blandit,
        </TabPanel>
        <TabPanel value={value} index={2}>
          tor nec, dapibus ex. Praesent posuere, mauris non imperdiet blandit,
          lectus diam volutpat mi, non sagittis orci felis quis lorem. Donec sed
          ipsum sit amet lacus pharetra molestie sed quis massa. Sed sed tortor
          quis tortor dictum pretium quis eu nunc. Maecenas gravida semper nibh,
          eu laoreet turpis elementum sodales. Phasellus sit amet ultrices sem,
          non congue erat. Integer ac faucibus sapien.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aliquam auctor molestie tortor sed
          euismod. Duis at arcu hendrerit, ullamcorper tortor nec, dapibus ex.
          Praesent posuere, mauris non imperdiet blandit,
        </TabPanel>
      </div>
    </Container>
  );
}
