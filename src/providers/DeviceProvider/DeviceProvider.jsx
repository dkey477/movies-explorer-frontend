import { useEffect, useRef, useState } from 'react';
import { DEVICE_CONFIG } from '../../config/vars';
import { DeviceContext } from '../../contexts/DeviceContext';

export const DeviceProvider = ({ children }) => {
  const [ device, setDevice ] = useState('desktop');
  const debounce = useRef();

  useEffect(() => {
    const handleChangeDeviceType = () => {
      clearTimeout(debounce.current);

      debounce.current = setTimeout(() => {
        if (window.innerWidth > DEVICE_CONFIG.tablet.width) {
          setDevice(DEVICE_CONFIG.desktop.name);
        } else if (window.innerWidth > DEVICE_CONFIG.mobile.width) {
          setDevice(DEVICE_CONFIG.tablet.name);
        } else {
          setDevice(DEVICE_CONFIG.mobile.name);
        }
      }, 300);
    };

    handleChangeDeviceType();

    window.addEventListener('resize', handleChangeDeviceType);

    return () => {
      clearTimeout(debounce.current);
      window.removeEventListener('resize', handleChangeDeviceType);
    };
  }, [ device ]);

  return (
    <DeviceContext.Provider value={device}>
      {children}
    </DeviceContext.Provider>
  );
};
