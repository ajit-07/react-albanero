import React, { useState } from 'react'
import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
function App() {
  const [count, setCount] = useState(0)
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const input = form.elements["value"]
    const value = parseInt(input.value);
    //console.log(input,value,form)
    if (!isNaN(value) && value >= 0) {
      setCount(count + value)
    } else if (!isNaN(value) && value <= 0 ) {
      setCount(count - value)
    }
    input.value = ""
  };
  return (<>
    <CssBaseline />
    <AppBar position="realtive">
      <Toolbar>
        <AppsIcon />
        <Typography variant='h6'>
          Counter
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant='h2' align='center' color='textPrimary'>COUNTER</Typography>
        </Container>
      </div>
      <div>
        <Typography variant='h3' align='center' color='black'>
          {count}
        </Typography>
      </div>
      <div>
        <Button variant="contained" size="medium" onClick={() => { setCount(count + 1) }}>
          Increase
        </Button>
        <Button variant="contained" size="medium" onClick={() => { setCount(count - 1) }}>
          Decrease
        </Button>
        <Button variant="contained" size="medium" onClick={() => { setCount(0) }}>
          Reset
        </Button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <TextField id="outlined-basic" label="Enter Value" variant="outlined" name='value' placeholder='0' />
          </label>
          <Button variant="contained" size="medium" type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </main>
  </>)
}

export default App;
