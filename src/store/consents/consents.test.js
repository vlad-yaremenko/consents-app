import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchAll, add } from './index';
import http from '@http';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const consentsData = [{ name: '1', email: '1@email.com', agreeTo: [] }, { name: '2', email: '2@email.com', agreeTo: [] }];
jest.mock('@http', () => ({
  get: jest.fn().mockReturnValue(consentsData),
  post: jest.fn()
}));

describe('Consents store', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ consents: { data: [] } })
  });
  describe('add', () => {
    // We should also test here edge cases, like API fails and so on

    const body = {
      name: 'name',
      email: 'email@email.com',
      agreeTo: []
    };

    it('should call API for consents creation', () => {
      store.dispatch(add(body)).then(() => {
        expect(http.post).toHaveBeenCalledWith('/consents', body);
      });
    });
    it('should add newly created item to the list', () => {
      store.dispatch(add(body)).then(() => {
        expect(store.consents.data).toEqual([body]);
      });

      const oneMoreItem = {
        name: 'One more name',
        email: 'oneMore@email.com',
        agreeTo: ['Test value', 'Test value 2']
      };
      store.dispatch(add(body)).then(() => {
        expect(store.consents.data).toEqual([body, oneMoreItem]);
      });
    })
  });

  describe('fetchAll', () => {
    it('should get array of consents from API', () => {
      store.dispatch(fetchAll()).then(() => {
        expect(store.consents.data).toEqual(consentsData);
      });
    });
  });
});
