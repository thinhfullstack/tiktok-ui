import Home from '@/pages/Home/Index';
import Following from '@/pages/Following/Index';
import Profile from '@/pages/Profile/Index';
import Upload from '@/pages/Upload/Index';
import Search from '@/pages/Search/Index';
import HeaderOnly from '@/components/Layouts/HeaderOnly/Index'

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
