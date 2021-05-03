import { configureStore } from '@reduxjs/toolkit';
import consents from './consents';

export default configureStore({
  reducer: {
    consents
  }
});
