/* eslint-disable no-proto */
class AppErr extends Error {
  constructor(msg = 'oopsie ... unknown error (╯°□°)╯') {
    super(msg);
    // this is useful for Jest and error subclassing https://github.com/facebook/jest/issues/5416#issuecomment-456414004
    this.constructor = AppErr;
    this.__proto__ = AppErr.prototype;
  }
}

class NotImplemented extends AppErr {
  constructor(msg = 'oopsie ... not implemented (╯°□°)╯') {
    super(msg);
    this.constructor = NotImplemented;
    this.__proto__ = NotImplemented.prototype;
  }
}

export { AppErr, NotImplemented };
