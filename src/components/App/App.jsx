import { CurrentUserProvider } from '../../providers/CurrentUserProvider/CurrentUserProvider';
import { PopupProvider } from '../../providers/PopupProvider/PopupProvider';
import { MoviesProvider } from '../../providers/MoviesProvider/MoviesProvider';
import { DeviceProvider } from '../../providers/DeviceProvider/DeviceProvider';
import { AppRouterProvider } from '../../providers/AppRouterProvider/AppRouterProvider';

export function App() {
  return (
    <CurrentUserProvider>
      <PopupProvider>
        <MoviesProvider>
          <DeviceProvider>
            <AppRouterProvider />
          </DeviceProvider>
        </MoviesProvider>
      </PopupProvider>
    </CurrentUserProvider>
  );
}
