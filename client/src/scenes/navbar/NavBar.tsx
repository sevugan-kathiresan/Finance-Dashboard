import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import PixIcon from '@mui/icons-material/Pix';

const Navbar = () => {
    const {palette} = useTheme(); // Let's us use theme we created in the App.tsx file
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{fontSize:"28px"}}/>
                <Typography variant="h4" fontSize="16px">
                    Finanseer
                </Typography>
            </FlexBetween>
            {/* RIGHT SIDE */}
            <FlexBetween gap="2rem">
                <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                    Dashboard
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
}

export default Navbar;