class Storage {
  constructor() {
    this.localStorage = window.localStorage;
  }

  convertToJSON(value) {
    return JSON.stringify(value);
  }

  setLocalStorage(key, value) {
    this.localStorage.setItem(
      key,
      typeof value !== "string" ? this.convertToJSON(value) : value
    );
  }

  getLocalStorage(key) {
    if (key === "" || key === undefined) {
      console.warn("INSERT KEY!");
    } else {
      return JSON.parse(this.localStorage.getItem(key));
    }
  }
}

export default new Storage();
