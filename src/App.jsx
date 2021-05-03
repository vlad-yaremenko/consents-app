import './App.scss';
import DefaultLayout from '@layouts/Default';
import Routes from './Routes';

const Component = () => (
  <DefaultLayout>
    <Routes/>
  </DefaultLayout>
);
 Component.displayName = 'App';

export default Component;
