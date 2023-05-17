import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import logo from '../../../public/logo.jpg'

function Footer() {
    const {
        palette: { neutral },
    } = useTheme();
    return (
        <Box
            marginTop="70px"
            padding="30px 0"
            backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box
                    fontSize='12px'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    onClick={() => navigate('/')}
                    sx={{ '&:hover': { cursor: "pointer" } }}
                    color={shades.primary[500]}
                >
                    HOODIESPACE
                    <Box
                        component="img"
                        sx={{
                            height: 80,
                            width: 90,
                        }}
                        src={logo}
                    />
                </Box>
                <Box>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="20px"
                    >
                        About Us
                    </Typography>
                    <Typography
                        mb="10px">
                        Careers
                    </Typography>
                    <Typography
                        mb="10px">
                        Our Stores
                    </Typography>
                    <Typography
                        mb="10px">
                        Terms & Conditions
                    </Typography>
                    <Typography
                        mb="20px">
                        Privacy Policy
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="h4"
                        fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="10px">Help Center</Typography>
                    <Typography mb="10px">Track Your Order</Typography>
                    <Typography mb="10px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="20px">Returns & Refunds</Typography>
                </Box>

                <Box
                    width="clamp(20%, 25%, 30%)"
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold" mb="30px"
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        mb="20px"
                    >
                        Kakori House, Ghat Gate, Jaipur, Rajasthan.
                        PIN: 302003
                    </Typography>
                    <Typography
                        mb="20px" sx={{ wordWrap: "break-word" }}>
                        Email: sayamalvi@gmail.com
                    </Typography>
                    <Typography
                        mb="20px"
                    >
                        +(91) 9024083904
                    </Typography>
                </Box>
            </Box>
            <p style={{ textAlign: 'center' }}>
                All the products and images are copyright of
                <a
                    href="https://www.5ivepillars.com"
                    style={{
                        marginLeft: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}
                >
                    5ivepillars.com
                </a>
            </p>
        </Box>
    );
}

export default Footer;