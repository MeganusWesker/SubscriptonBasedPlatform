import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Verify from "./Pages/Verify";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { loadUser } from "./redux/action/userAction";
import Loader from "./Components/Loader";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";
import ChangeProfile from "./Pages/ChangeProfile";
import ChangePhoto from "./Pages/ChangePhoto";
import Dashboard from "./Pages/Admin/Dashboard";
import CreateCourse from "./Pages/Admin/CreateCourse";
import CourseList from "./Pages/Admin/CourseList";
import UserList from "./Pages/Admin/UserList";
import ViewLecture from "./Pages/Admin/ViewLecture";
import Courses from "./Pages/Courses";
import SingleCourse from "./Pages/SingleCourse";
import Subscribe from "./Pages/Subscribe";
import PaymentSuccess from "./Pages/PaymentSuccess";
import ProtectedRoute from "./Pages/ProtectedRoute";


function App() {
  const { loading, user, isAuthenticated } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/verify",
      element: <Verify />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={false}
        >
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/changePassword",
      element: (
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={false}
        >
          <ChangePassword/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/updateProfile",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={false}
        >
          <ChangeProfile/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/changePhoto",
         element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={false}
        >
          <ChangePhoto/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard",
       element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <Dashboard/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/create",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <CreateCourse/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/course",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <CourseList/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/users",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <UserList/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/viewLectures/:id",
      element:(
        <ProtectedRoute
          user={user}
          isAuthenticated={isAuthenticated}
          isAdmin={true}
        >
          <ViewLecture/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/course/:id",
      element: <SingleCourse />,
    },
    {
      path: "/subscribe",
      element: <Subscribe />,
    },
    {
      path: "/paymentsuccess",
      element: <PaymentSuccess />,
    }
  ]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return ( loading===undefined || loading)?  (
    <Loader />
  ) : (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
