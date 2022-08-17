import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';

import PrivateRoute from "./components/guards/PrivateRoute";
import PostOwner from "./components/guards/PostOwner";

import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Blog from './components/Blog/Blog';
import Details from "./components/Details/Details";
import Author from "./components/Author/Author";
import MyPosts from "./components/MyPosts/MyPosts";
import Footer from "./components/Footer/Footer";

const Register = lazy(() => import('./components/Register/Register'));
  
function App() {

    return (
        <AuthProvider>
            <div id="box">
                <Header />

                {/* Main Content */}
                <PostProvider>
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={
                                <Suspense fallback={<span>Loading....</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path="/create" element={(
                                <PrivateRoute>
                                    <Create />
                                </PrivateRoute>
                            )} />
                            <Route element={<PostOwner />}>
                                <Route path="/blog/:postId/edit" element={<Edit />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/my-posts" element={<MyPosts />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                            <Route path="/blog/:postId/author" element={<Author />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/logout" element={<Logout />} />
                            </Route>
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:postId" element={<Details />} />
                        </Routes>
                    </main>
                </PostProvider>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App;
