import { Box, Button, Grid, Paper, TextField } from '@mui/material';

const CreatePostContainer = (): JSX.Element => {
    return (
        <Paper>
            <Box px={3} py={2}>
                <h2>Create post</h2>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField id="outlined-basic" label="Short content" variant="outlined" fullWidth required/>
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Create
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default CreatePostContainer;