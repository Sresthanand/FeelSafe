import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import {Wrapper} from "@googlemaps/react-wrapper";
import Login from './Login';
import Register from './Register';
import GetRelatives from './GetRelatives';
import Home from './Home';
import AddComplaint from './AddComplaint';
import MapScreen from './MapScreen';
import {isUserLoggedIn} from '../utils/localStorage';
import {googleMapsApiKey} from '../config'


const routesConfig={
    addComplaint:{
        path:'/add-complaint',
        component:AddComplaint,
        name:"addcomplaint",
        exact:true,
        privateRoute:true
    },
    mapScreen: {
        path: '/map',
        component: MapScreen,
        name: "map",
        exact: true,
        privateRoute: true
    },
    home: {
        path: '/home',
        component: Home,
        name: "home",
        exact: true,
        privateRoute: true
    },
    login: {
        path: '/login',
        component: Login,
        name: "login",
        exact: true,
        privateRoute: false,
    },
    register: {
        path: '/register',
        component: Register,
        name: "register",
        exact: true,
        privateRoute: false,
    },
    getRelatives: {
        path: '/get-relatives',
        component: GetRelatives,
        name: "get-relatives",
        exact: true,
        privateRoute: true,
    },
};

const render=(status) => {
    return <h1>{status}</h1>
}

const ProtectedRoutes=(props) => {
    const {component: Component,privateRoute}=props;
    const userLoggedIn=isUserLoggedIn();

    const isValidRoute=
        (privateRoute&&userLoggedIn)||(!privateRoute&&!userLoggedIn);

    if(isValidRoute) {
        return (
            <Wrapper apiKey={googleMapsApiKey} render={render}>
                <Component />
            </Wrapper>
        )
    }

    return <Redirect to={privateRoute? '/login':'/home'} />;
};

const AppRoutes=() => {
    const routes=Object.keys(routesConfig);
    return (
        <Router>
            <Switch>
                {routes.map((route) => {
                    const config=routesConfig[route];
                    return (
                        <Route
                            exact={config.exact}
                            key={`${config.name}`}
                            path={config.path}
                            render={() => (
                                <ProtectedRoutes
                                    component={config.component}
                                    privateRoute={config.privateRoute}
                                />
                            )}
                        />
                    );
                })}
                <Route path='/' render={() => (<Redirect to={'/login'} />)} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;