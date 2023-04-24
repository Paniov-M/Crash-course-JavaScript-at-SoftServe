// task 1

class CssClass {
    constructor(class_name) {
      this.class_name = class_name;
      this.styles = {};
    }
  
    setStyle(property, value) {
      this.styles[property] = value;
    }
  
    removeStyle(property) {
      if (property in this.styles) {
        delete this.styles[property];
      }
    }
  
    getCSS() {
      let css_code = `.${this.class_name} {\n`;
      for (let property in this.styles) {
        css_code += `\t${property}: ${this.styles[property]};\n`;
      }
      css_code += `}\n`;
      console.log(css_code)
      return css_code;
    }
  }

  let some_css = new CssClass("Some css")
  some_css.setStyle(1,2)
  some_css.getCSS()

// task 2

class Button{
    constructor(width,height,text) {
        this.width = width;
        this.height = height;
        this.text = text;
      }

      showBtn() {
        document.write(`<button style="width:${this.width}px;height:${this.height}px">${this.text}</button>`);
      }
}


class BootstrapButton extends Button{

    constructor(width,height,text,color) {
       super(width,height,text)
        this.color = color;
      }

      showBtn() {
        document.write(`<button class="btn btn-${this.color}" style="width:${this.width}px;height:${this.height}px">${this.text}</button>`);
      }

}

let button = new BootstrapButton(300,500,"btn","red");
button.showBtn()