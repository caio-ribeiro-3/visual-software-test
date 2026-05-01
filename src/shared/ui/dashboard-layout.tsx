import { useState, type PropsWithChildren } from 'react';

import { styled } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from '@/shared/infra/router/link';
import { Logo } from '@/shared/ui/logo';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});
const mainListItems = [
    { text: 'Usuários ', icon: <PeopleRoundedIcon />, to: '/users' },
];
/**
 * Componente de Layout da área administrativa.
 * 
 * Fornece uma estrutura consistente que inclui uma barra de navegação superior
 * e um menu lateral (Drawer) responsivo. O menu se adapta automaticamente,
 * alternando entre uma barra lateral fixa em telas grandes e um menu retrátil
 * (hambúrguer) em dispositivos móveis.
 */
export const DashboardLayout = ({ children }: PropsWithChildren) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const menu = (
        <Box
            sx={{
                overflow: 'auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Stack sx={{ flexGrow: 1 }}>
                <Toolbar
                    sx={{
                        borderBottom: '1px solid #d0d7de'
                    }}>
                    <Logo />
                </Toolbar>
                <List data-testid="list" aria-label='list' role='list' dense>
                    {mainListItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton component={Link} to={item.to} selected={index === 0}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </Box>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: 'white',
                    color: 'text.primary',
                    boxShadow: 'none',
                    borderBottom: '1px solid #d0d7de'
                }}
            >
                <Toolbar>
                    <IconButton aria-label='menu' color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ ml: 'auto', mr: 2, display: { md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
            >
                {menu}
            </Drawer>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth }
                }}
                open
            >
                {menu}
            </Drawer>


            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    p: { xs: 2, md: 4 },
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    mt: 10
                }}
            >
                {children}
            </Box>
        </Box>
    )
}