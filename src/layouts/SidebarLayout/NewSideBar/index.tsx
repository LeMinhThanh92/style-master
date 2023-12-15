import * as React from 'react';
import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import HomeDrawer from '@mui/material/Drawer';
import DrawerAppBar, {AppBarProps as DrawerAppBarProps} from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import {
    Avatar, ButtonGroup,

    CssBaseline,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Menu, Stack,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem";
import {DarkModeOutlined, LightModeOutlined, LogoutOutlined} from "@mui/icons-material";
import {ColorModeContext} from "../../../App";


let userData:any
const NavigationDrawer = (props: any) => {

    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
        userData = JSON.parse(storedUserData);
    }

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme()
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('Style Master')

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const settings = [
        {
            text: 'Log out',
            icon: <LogoutOutlined fontSize={'small'}/>,
            to: '/login'
        }
    ];

    const menuItems = [
        {
            text: 'Style Master',
            icon: <Avatar sx={{width: 35, height: 35}} variant={'square'} src='/static/images/avatars/house.png'/>,
            to: '/sm/home'
        },
        {
            text: 'Style Master Add',
            icon: <Avatar sx={{width: 35, height: 35}} variant={'square'} src='/static/images/avatars/additem.png'/>,
            to: '/sm/add'
        },
    ];

    return (
        <Box sx={{display: "flex"}}>
            <CssBaseline/>
            <AppBar position={"fixed"} open={open}>
                <Toolbar>
                    <IconButton
                        color={"inherit"}
                        aria-label={"open drawer"}
                        edge={"start"}
                        sx={{
                            ml: 2,
                            marginRight: 5,
                            ...(open && {display: "none"})
                        }}
                        onClick={handleDrawerOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography sx={{fontSize: '2em', flexGrow: 1, ml: 1}}>
                        {title}
                    </Typography>
                    <Box sx={{flexGrow: 0}}>
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                        >
                            <IconButton sx={{
                                width: 32,
                                height: 32,
                                mr: 2,
                                backgroundColor: 'white',
                                color: 'black',
                                fontSize: 'small'
                            }} onClick={() => {
                                colorMode.toggleColorMode()
                            }}>
                                {theme.palette.mode === 'dark' ? <LightModeOutlined/> : <DarkModeOutlined/>}
                            </IconButton>
                        </ButtonGroup>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <Box>
                                <Stack direction={'row'} spacing={1} onClick={handleOpenUserMenu}>
                                    <IconButton sx={{p: 0}}>
                                        <Avatar alt="Image" src="/static/images/avatars/man.png"/>
                                    </IconButton>
                                    <Typography justifyContent={'center'} alignItems={'center'} display={'flex'}>
                                        {userData.accountName}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                                    <ListItemIcon onClick={() => {
                                        navigate(setting.to)
                                    }}>
                                        {setting.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={setting.text}
                                                  onClick={() => {
                                                      navigate(setting.to)
                                                  }}
                                                  primaryTypographyProps={{
                                                      fontWeight: 'bold',
                                                      variant: 'body2',
                                                  }}/>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer variant={"permanent"} open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{display: "block"}}>
                            <Tooltip title={item.text} placement={'right-start'}>

                                <ListItemButton
                                    key={item.text}
                                    sx={{
                                        maxHeight: 35,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                        m:1
                                    }}
                                    onClick={() => {
                                        setTitle(item.text);
                                        navigate(item.to)
                                    }}>
                                    <ListItemIcon sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto"
                                    }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}
                                                  sx={{opacity: open ? 1 : 0}}
                                                  primaryTypographyProps={{
                                                      fontWeight: 'normal',
                                                      variant: 'body2',
                                                  }}/>
                                </ListItemButton>

                            </Tooltip>

                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                {props.children}
            </Box>
        </Box>
    )
}

const drawerWidth = 240

const openedDrawer = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: "hidden",
})

const closeDrawer = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
})

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends DrawerAppBarProps {
    open?: boolean
}

const AppBar = styled(DrawerAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Drawer = styled(HomeDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box', ...(open && {
        ...openedDrawer(theme),
        '& .MuiDrawer-paper': openedDrawer(theme),
    }), ...(!open && {...closeDrawer(theme), '& .MuiDrawer-paper': closeDrawer(theme),}),
}))

export default NavigationDrawer