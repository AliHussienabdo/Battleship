class cell {
  constructor() {
    this.shipNum = 0;
    this.hited = false;
  }
  addToken(val) {
    this.shipNum = val;
  }
  hasShip() {
    return this.shipNum > 0;
  }
  getValue() {
    return this.shipNum;
  }

  isHited() {
    return this.hited;
  }

  hit() {
    this.hited = true;
    if (this.hasShip()) {
      this.shipNum = -2;
      return true;
    }
    this.shipNum = -1;
    return false;
  }

}

export { cell };
