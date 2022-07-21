import { useRoutes } from 'react-router-dom';
import LazyLoading from '../components/LazyLoading';

const NotFound = LazyLoading(() => import('../pages/NotFound'));
const AuthOutlet = LazyLoading(() => import('../components/HOC/AuthOutlet'));
const AdminOutlet = LazyLoading(() => import('../components/HOC/AdminOutlet'));

const ErorrBoundary = LazyLoading(() =>
    import('../components/HOC/ErrorBoundary')
);

const Home = LazyLoading(() => import('../pages/website/Home'));
const SearchBrands = LazyLoading(() =>
    import('../pages/website/containers/brands')
);
const ProdContainter = LazyLoading(() =>
    import('../pages/website/containers/products')
);
const Checkout = LazyLoading(() => import('../pages/website/checkout'));
const Cart = LazyLoading(() => import('../pages/website/cart'));
// auth Routes
const SignUp = LazyLoading(() => import('../pages/auth/signup/SignUp'));
const SignIn = LazyLoading(() => import('../pages/auth/signin/Signin'));
const Sell = LazyLoading(() => import('../pages/seller/seller/Home'));
const Agent = LazyLoading(() => import('../pages/Agent/website/Home'));

// admin page
const Admin = LazyLoading(() =>
    import('../pages/Agent - Copy/website/Home.js')
);
const AdminLogin = LazyLoading(() =>
    import('../pages/Agent - Copy/website/Login')
);

const AdminSignup = LazyLoading(() =>
    import('../pages/Agent - Copy/website/Signup')
);

const AdminForgotPassword = LazyLoading(() =>
    import('../pages/Agent - Copy/website/ForgotPass')
);
const AdminDashboard = LazyLoading(() =>
    import('../pages/Agent - Copy/Dashboard')
);

// sellerPage
const CreateAccount = LazyLoading(() =>
    import('../pages/seller/CreateAccount')
);
const SellerDashboard = LazyLoading(() => import('../pages/seller/Dashboard'));
// Agent Page
const NewAgent = LazyLoading(() => import('../pages/Agent/newAgent.js'));
const AgentDashboard = LazyLoading(() => import('../pages/Agent/Dashboard'));

//
const AppRoutes = () => {
    let allRoutes = useRoutes([
        {
            path: '/',
            children: [
                { element: <Home />, index: true },
                { path: '/signin', element: <SignIn /> },
                {
                    path: '/signup',
                    element: <SignUp />,
                },
                {
                    path: '/s/:brandName',
                    element: <SearchBrands />,
                },
                {
                    path: '/b/:shop/:product',
                    element: <ProdContainter />,
                },
                {
                    path: '/checkout',
                    element: <Checkout />,
                },
                {
                    path: '/cart',
                    element: <Cart />,
                },
                { path: '/forgot-password', element: <SignUp /> },
            ],
        },
        {
            path: '/seller',
            element: <AuthOutlet to="seller" />,
            children: [
                { element: <Sell />, index: true },
                {
                    path: '/seller/create-account/:level',
                    element: <CreateAccount />,
                },
                {
                    path: '/seller/dashboard',
                    element: <SellerDashboard />,
                },
                {
                    path: 'seller/sell',
                    element: <Sell />,
                },
            ],
        },
        {
            path: '/agent',
            element: <AuthOutlet to="agent" />,
            children: [
                { element: <Agent />, index: true },
                {
                    path: '/agent/new-agent',
                    element: <NewAgent />,
                },
                { element: <AgentDashboard />, path: 'dashboard' },
            ],
        },
        {
            path: '/admin',
            children: [
                { element: <Admin />, index: true },
                {
                    path: '/admin/signup',
                    element: <AdminSignup />,
                },
                {
                    element: <AdminForgotPassword />,
                    path: '/admin/forgot-password',
                },
                {
                    element: <AdminLogin />,
                    path: '/admin/login',
                },
                {
                    element: <AdminOutlet to="admin" />,
                    path: '/admin/dashboard',
                    children: [{ element: <AdminDashboard />, index: true }],
                },
            ],
        },
        {
            path: '/error/:codeErr',
            element: <ErorrBoundary />,
        },
        // {
        //     path: '/yomi/Dashboard',
        //     element: <BossDashboard />,
        // },

        {
            // =======
            // >>>>>>> 74763df8bbd4e67e19856d0a4e6a726ba0362df9
            path: '*',
            element: <NotFound />,
        },
    ]);
    return allRoutes;
};

export default AppRoutes;
