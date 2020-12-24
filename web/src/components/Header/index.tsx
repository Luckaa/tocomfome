import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TocomFomeLogo from '../../assets/images/tocomfome-logo.svg';
import geolocationService from '../../services/geolocation.service';
import './header.scss';

const Header: React.FC = () => {
  const history = useHistory();
  const [streetName, setStreetName] = useState('--');

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (location) => {
      const { latitude, longitude } = location.coords;
      const streetNameGeoLocation = await geolocationService.getStreetFromCoordenates(
        latitude,
        longitude
      );

      if (streetNameGeoLocation) {
        setStreetName(streetNameGeoLocation);
      }
    });
  }

  const goToLogin = () => history.push('/login');

  return (
    <div className="header-container">
      <div className="logo">
        <img src={TocomFomeLogo} alt="logo to com fome" />
      </div>

      <div className="delivery-address">
        <p className="delivery-address-label">Entregar em:</p>
        <p className="delivery-address-value">{streetName}</p>
      </div>

      <div className="header-actions">
        <Button color="primary" startIcon={<ShoppingCart color="primary" />}>
          Carrinho
        </Button>
        <Button color="primary" onClick={goToLogin}>
          Entrar
        </Button>{' '}
      </div>
    </div>
  );
};

export default Header;
