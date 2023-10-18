class cell {
  constructor() {
    this.shipNum = 0;
    this.hited = false;
  }
  addToken(val) {
    shipNum = val;
  }
  isThereShip() {
    return shipNum > 0;
  }
  getValue() {
    return this.shipNum;
  }

  isHited() {
    return this.hited;
  }

  hit() {
    if (shipNum == 0) {
      this.shipNum = -1;
    } else if (shipNum > 0) {
      this.shipNum = -2;
    }
    this.hited = true;
  }
}

export { cell };
