export class Regexp {
  searchTarget(string, target) {
    return string.search(target) === -1 ? false : true;
  }

  splitStr(string, target) {
    if (this.searchTarget(string, target)) {
      return string.split(target);
    } else {
      return false;
    }
  }
}
