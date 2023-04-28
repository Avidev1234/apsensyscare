import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};


const formAlign = {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between'
}

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <>
            <Button
                onClick={handleOpen}
                style={{
                    width: "max-content",
                    cursor: "pointer",
                    display: "flex",
                    fontSize: "12px",
                    color: "blueviolet",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: ".2rem",
                }}
            >
                <AddIcon style={{ fontSize: "20px" }} fontSize="large" />
                Add New Address
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={formAlign}>
                        <TextField
                            label="With normal TextField"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '100%' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                            variant="standard"
                        />
                        <TextField
                            label="With normal TextField"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '100%' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                            variant="standard"
                        />
                        <TextField
                            label="With normal TextField"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '100%' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                            variant="standard"
                        />
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                            <Input
                                id="standard-adornment-weight"
                                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </FormControl>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
