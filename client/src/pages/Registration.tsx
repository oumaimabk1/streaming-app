import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";



function getSteps(): string[] {
  return ["Enter Information", "Choose Plan", "Payment"];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <TextField
            id="standard-basic"
            label="Name"
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Email"
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            fullWidth
          />
        </div>
      );
    case 1:
      return (
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose Plan</FormLabel>
          <RadioGroup aria-label="plan">
            <FormControlLabel value="free" control={<Radio />} label="Free" />
            <FormControlLabel
              value="premium"
              control={<Radio />}
              label="Premium"
            />
          </RadioGroup>
        </FormControl>
      );
    case 2:
      return (
        <div>
          <TextField
            id="standard-basic"
            label="Card Number"
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Expiration Date"
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="CVC"
            margin="normal"
            fullWidth
          />
        </div>
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function RegistrationStepper() {

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
  <div className="flex flex-col justify-center">
    <h1 className="justify-items-center">Registration</h1>
    <Container maxWidth="sm" >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography >
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography >
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
    </div>
  );
}