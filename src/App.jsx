import { BrowserRouter, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./contexts/AuthContext";
import { TweetProvider } from "./contexts/TweetContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import routes from "./lib/routes";

//borrable

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <AuthProvider>
        <TweetProvider>
          <SnackbarProvider>
            <BrowserRouter>
              <Switch>
                {restricted.map(({ path, component }) => (
                  <PrivateRoute
                    key={path}
                    exact
                    path={path}
                    component={component}
                  />
                ))}
                {unrestricted.map(({ path, component }) => (
                  <PublicRoute
                    key={path}
                    exact
                    path={path}
                    component={component}
                  />
                ))}
              </Switch>
            </BrowserRouter>
          </SnackbarProvider>
        </TweetProvider>
      </AuthProvider>
    </main>
  );
};

export default App;
