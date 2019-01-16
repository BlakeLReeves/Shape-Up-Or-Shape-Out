let canvas = $(`#canvas`);

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    describe() {
        let navWidth = $(`#navWidth`)
        let navHeight = $(`#navHeight`);
        navWidth.text(` ${this.width}`);
        navHeight.text(` ${this.height}`);
    }
}

class Rectangle extends Shape {
    constructor(shapeName, top, left, width, height, area, perimeter) {

        super(width, height);

        this.shapeName = shapeName;
        this.top = top;
        this.left = left;
        this.area = area;
        this.perimeter = perimeter;
        this.div = $(`<div class="${this.shapeName}"></div>`);
        this.div.css({
            "top": `${this.top}px`,
            "left": `${this.left}px`,
            "width": `${this.width}px`,
            "height": `${this.height}px`,
        });
        canvas.append(this.div);

        this.div.click(() => {
            this.describe();
        });
    }

    describe() {
        let navShapeName = $(`#navShapeName`);
        let navWidth = $(`#navWidth`)
        let navHeight = $(`#navHeight`);
        let navArea = $(`#navArea`);
        let navPerimeter = $(`#navPerimeter`);
        navShapeName.text(` ${this.shapeName}`);
        navWidth.text(` ${this.width}`);
        navHeight.text(` ${this.height}`);
        navArea.text(` ${this.area}`);
        navPerimeter.text(` ${this.perimeter}`);
    }
}

class Square extends Shape {
    constructor(shapeName, top, left, width, height, area, perimeter) {

        super(width, height);

        this.shapeName = shapeName;
        this.top = top;
        this.left = left;
        this.area = area;
        this.perimeter = perimeter;
        this.div = $(`<div class="${this.shapeName}"></div>`);
        this.div.css({
            "top": `${this.top}px`,
            "left": `${this.left}px`,
            "width": `${this.width}px`,
            "height": `${this.height}px`,
        });
        canvas.append(this.div);

        this.div.click(() => {
            this.describe();
        });

    }

    describe() {
        let navShapeName = $(`#navShapeName`);
        let navWidth = $(`#navWidth`)
        let navHeight = $(`#navHeight`);
        let navArea = $(`#navArea`);
        let navPerimeter = $(`#navPerimeter`);
        navShapeName.text(` ${this.shapeName}`);
        navWidth.text(` ${this.width}`);
        navHeight.text(` ${this.height}`);
        navArea.text(` ${this.area}`);
        navPerimeter.text(` ${this.perimeter}`);
    }
}

let rectBtn = $(`#rectBtn`);

rectBtn.click(() => {
    this.rectWidthInput = $(`#rectWidthInput`).val();
    this.rectHeightInput = $(`#rectHeightInput`).val();

    let width = this.rectWidthInput;
    let height = this.rectHeightInput;
    let top = Math.floor(Math.random() * (600 - height));
    let left = Math.floor(Math.random() * (600 - width));
    let area = width * height;
    let perimeter = ((width * 2) + (height * 2));

    if (rectWidthInput > 600) {
        alert('The maximum input is 600. Try again!')
        return;
    }

    if (rectHeightInput > 600) {
        alert('The maximum input is 600. Try again!')
        return;
    }

    let newRect = new Rectangle('rectangle', top, left, width, height, area, perimeter);

    console.log(newRect);
});

let sqBtn = $(`#sqBtn`);

sqBtn.click(() => {
    this.sqWidthInput = $(`#sqLengthInput`).val();
    this.sqHeightInput = $(`#sqLengthInput`).val();

    let width = this.sqWidthInput;
    let height = this.sqHeightInput;
    let top = Math.floor(Math.random() * (600 - height));
    let left = Math.floor(Math.random() * (600 - width));
    let area = width * height;
    let perimeter = ((width * 2) + (height * 2));

    if (sqWidthInput > 600) {
        alert('The maximum input is 600. Try again!')
        return;
    }

    if (sqHeightInput > 600) {
        alert('The maximum input is 600. Try again!')
        return;
    }

    let newSq = new Square('square', top, left, width, height, area, perimeter);

    console.log(newSq);
});

// let s1 = new Shape('Square', null, null, 40, 200, 50, null);
// console.log(s1);
// s1.describe();