let canvas = $(`#canvas`);

class Shape {
    constructor(shapeName, top, left, width, height, area, perimeter) {
        this.shapeName = shapeName;
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
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
        let navHeight = $(`#navHeight`);
        let navArea = $(`#navArea`);
        let navPerimeter = $(`#navPerimeter`);
        return [navShapeName.append(` ${this.shapeName}`), navWidth.append(` ${this.width}`), navHeight.append(` ${this.height}`), navArea.append(` ${this.area}`), navPerimeter.append(` ${this.perimeter}`)];
    }
}

class Rectangle extends Shape {
    constructor(shapeName, top, left, width, height, area, perimeter) {

        super(shapeName, top, left, width, height, area, perimeter);
    }
}

let rectBtn = $(`#rectBtn`);

rectBtn.click(() => {
    this.rectWidthInput = $(`#rectWidthInput`).val();
    this.rectHeightInput = $(`#rectHeightInput`).val();

    let width = this.rectWidthInput;
    let height = this.rectHeightInput;
    let top = Math.floor(Math.random() * (600 - width));
    let left = Math.floor(Math.random() * (600 - height));
    let area = width * height;
    let perimeter = ((width * 2) + (height * 2));

    let newRect = new Rectangle('rectangle', top, left, width, height, area, perimeter);

    // newRect.div.click(() => {
    //     newRect.describe();
    // });
    
    console.log(newRect);
    console.log(`${this.rectWidthInput} ${this.rectHeightInput}`);
});

// let s1 = new Shape('Square', null, null, 40, 200, 50, null);
// console.log(s1);
// s1.describe();