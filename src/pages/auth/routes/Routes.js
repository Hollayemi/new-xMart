import { useRoutes } from 'react-router-dom';
import DashOutlet from '../../../components/HOC/DashboardOutlet';
import LazyLoading from '../../../components/LazyLoading';

const NotFound = LazyLoading(() => import('../../NotFound'));
const AuthOutlet = LazyLoading(() =>
    import('../../../components/HOC/AuthOutlet')
);

const ErorrBoundary = LazyLoading(() =>
    import('../../../components/HOC/ErrorBoundary')
);

// auth Routes
const SignUp = LazyLoading(() => import('../signup/SignUp'));
const SignIn = LazyLoading(() => import('../signin/Signin'));
const Home = LazyLoading(() => import('../../website/Home'));
const Seller = LazyLoading(() => import('../../seller'));
const Agent = LazyLoading(() => import('../../Agent'));

// sellerPage
const CreateAccount = LazyLoading(() => import('../../seller/CreateAccount'));
const SellerDashboard = LazyLoading(() => import('../../seller/Dashboard'));
// Agent Page
const NewAgent = LazyLoading(() => import('../../Agent/newAgent.js'));
const AgentDashboard = LazyLoading(() => import('../../Agent/Dashboard'));

const BossDashboard = LazyLoading(() => import('../Dashboard/Dashboard.js'));

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
                { path: '/forgot-password', element: <SignUp /> },
            ],
        },
        {
            path: '/seller',
            element: <AuthOutlet to="seller" />,
            children: [
                { element: <Seller />, index: true },
                {
                    path: '/seller/create-account/:level',
                    element: <CreateAccount />,
                },
                {
                    path: '/seller/dashboard',
                    element: <SellerDashboard />,
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
            path: '/error/:codeErr',
            element: <ErorrBoundary />,
        },
        {
            path: '/yomi/Dashboard',
            element: <BossDashboard />,
        },

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
