import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import 'src/features/pages/login/login.style.scss';

const LoginContainer = () => {
    return (
        <div className='content'>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={8} sm={6} md={4}>
                    <Box
                        component="form"
                        autoComplete="off"
                        noValidate
                        bgcolor="white"
                        padding="40px"
                        borderRadius="10px"
                    >
                        <Stack spacing={3}>
                            <TextField id="email" label="Email" variant="outlined" required fullWidth/>
                            <TextField id="password" label="Password" variant="outlined" type="password" required fullWidth/>
                            <Button variant="contained" size='large'>Login</Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginContainer;