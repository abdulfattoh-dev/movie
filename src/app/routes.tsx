import { lazy, memo } from 'react';
import { useRoutes } from 'react-router-dom';
const MainLayout = lazy(() => import("../layout/MainLayout"))
const Home = lazy(() => import("../pages/home"))
const Movie = lazy(() => import("../pages/movie"))
const Bookmark = lazy(() => import("../pages/bookmark"))
const Search = lazy(() => import("../pages/search"))
const Login = lazy(() => import("../pages/login"))
const Register = lazy(() => import("../pages/register"))
const VerifyOtp = lazy(() => import("../pages/verify-otp"))
const MovieDetail = lazy(() => import("../pages/movie-detail"))

const AppRouters = () => {
  return useRoutes([
    {
      path: "/", element: <MainLayout />, children: [
        { index: true, element: <Home /> },
        { path: "movie", element: <Movie /> },
        { path: "bookmark", element: <Bookmark /> },
        { path: "search", element: <Search /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "verify-otp", element: <VerifyOtp /> },
        { path: "movie/:id", element: <MovieDetail /> }
      ]
    },
  ])
};

export default memo(AppRouters);