import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function TransitionsModal({ shouldOpen, modalData, setShouldOpen }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false); setShouldOpen(prev => false) }

    useEffect(() => {
        if (shouldOpen)
            handleOpen()
        else
            handleClose()
    }, [])


    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <h1 className="text-2xl hover:tracking-widest text-yellow-400 hover:text-sky-400 transition-all mb-[10px]"> {modalData?.rocket_name}</h1>
                        <h3 className="mb-[10px]">{modalData?.first_flight}</h3>
                        <p className="text-center text-sm"> Engine : {modalData?.engines.type}</p>
                        <img alt={"aman"} src={modalData?.flickr_images[0]} className="w-[400px] rounded-sm hover:animate-pulse mb-[10px] " />

                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {modalData?.description}
                        </Typography>
                        <button onClick={() => {
                            handleClose()
                            setShouldOpen(prev => false)
                        }}
                            className='text-right text-3xl animate-pulse  w-[100%] flex justify-end items-center transition-all text-red-600'>
                            <AiOutlineClose />
                        </button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
