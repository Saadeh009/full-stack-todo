import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
    borderRadius: '15px', borderColor:'#2E3239', backgroundColor: '#2E3239', input: { color: `#F4F6FA`}, "& label":{ color: `rgba(244, 246, 250, 0.5)` }, '& .MuiInputBase-root': {borderRadius: '15px'} 
})


