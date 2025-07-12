class Square {
    constructor(side) {
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

module.exports = Square;