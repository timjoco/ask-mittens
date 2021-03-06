import axios from 'axios';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h3: {
        padding: '18px',
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  spacing: 4,
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '25ch%',
    marginTop: theme.spacing(5),
    padding: '50px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formPadding: {
    padding: '50px',
  },
}));

class MittensForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    axios(
      {
        method: 'POST',
        url: '/api/forms',
        data: this.state,
      },
      await this.props.history.push('/form/thanks')
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // .then((res) => {
    //   if (res.data.status === 'success') {
    //     this.resetForm();
    //     // console.log(response);
    //   } else if (res.data.status === 'fail') {
    //     alert('Message failed to send.');
    //     // console.log(response);
    //   }
    // });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="h3">
              What's goin' on with your kitty?
            </Typography>
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
              className={classes.form}
            >
              <Grid container spacing={2}>
                <Grid item lg={12} sm={6}>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Your Name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    variant="outlined"
                    fullWidth
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={6}
                    placeholder="Your Question"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </div>
        </Container>
      </MuiThemeProvider>
    );
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }
}

export default withStyles(useStyles)(MittensForm);
