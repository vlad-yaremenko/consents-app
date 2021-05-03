import axios from 'axios';

/**
 * Why singletone?
 * What we can do here?
 * What else we can implement here? (Memoization pattern, ...)
 */
class HttpService {
  constructor() {
    // TODO: Cancel tokens. Why?

    if (HttpService.instance) {
      return HttpService.instance;
    }

    // TODO: interceptor request. Why?
    // TODO: interceptor response. Why?

    HttpService.instance = this;
  }

  get(...props) {
    return axios.get(...props);
  }

  post(...props) {
    return axios.post(...props);
  }

  put(...props) {
    return axios.put(...props);
  }

  delete(...props) {
    return axios.delete(...props);
  }
}

// Why? just because :). It just mock API so you can work localy without API requests
class MockProxy {
  constructor(http) {
    if (MockProxy.instance) {
      return MockProxy.instance;
    }

    this.data = [];
    this.service = http;

    MockProxy.instance = this;
  }

  async get(...props) {
    const [url] = props;

    if (url.includes('/consents')) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...this.data]);
        }, 1000);
      });
    }

    return this.service.get(...props);
  }

  async post(url, body, ...props) {
    if (url.includes('/consents')) {
      const value = {
        id: new Date().getTime(),
        name: body.name,
        email: body.email,
        agreeTo: [...body.agreeTo],
      };

      this.data.push(value);

      return value;
    }

    return this.service.post(url, body, ...props);
  }
}

export default new MockProxy(new HttpService());
