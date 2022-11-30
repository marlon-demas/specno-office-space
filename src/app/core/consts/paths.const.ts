import { BuildPaths, Path, ParamPath } from '@specno/routes';

export const PATHS = BuildPaths(
  {
    auth: Path('auth', {
      GettingStarted: Path('getting-started'),
      Login: Path('login'),
      Register: Path('register'),
      ForgotPassword: Path('forgot-password')
    })
  }
);
