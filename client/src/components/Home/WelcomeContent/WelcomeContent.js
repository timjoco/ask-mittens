import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      flexContainer: {
        marginTop: '100px',
        marginLeft: '90px',
        padding: '50px',
      },
    },
  },
});

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
        <Box p={5} m={1}>
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
    <MuiThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="ASK" {...a11yProps(0)} />
            <Tab label="LEARN" {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            You can ask Mittens anything about your kitty! If you are struggling
            to find information on what your kitty is going through, then just
            Ask Mittens! Mittens is an expert researcher and will consult with
            his team of professionals to help get you an answer that is catered
            to your specific kitty need!
          </TabPanel>
          <TabPanel value={value} index={1}>
            Make sure to stop by and check out Mittens daily blog! Mittens
            writes about all sorts of things ranging from new and exciting
            information in the animal world to general practice tips and tricks
            that will help keep your kitty happy!
          </TabPanel>
          <TabPanel value={value} index={2}>
            tor nec, dapibus ex. Praesent posuere, mauris non imperdiet blandit,
            lectus diam volutpat mi, non sagittis orci felis quis lorem. Donec
            sed ipsum sit amet lacus pharetra molestie sed quis massa. Sed sed
            tortor quis tortor dictum pretium quis eu nunc. Maecenas gravida
            semper nibh, eu laoreet turpis elementum sodales. Phasellus sit amet
            ultrices sem, non congue erat. Integer ac faucibus sapien.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor
            molestie tortor sed euismod. Duis at arcu hendrerit, ullamcorper
            tortor nec, dapibus ex. Praesent posuere, mauris non imperdiet
            blandit,
          </TabPanel>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}
