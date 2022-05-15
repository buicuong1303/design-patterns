

interface GUIFactory {
  createButton(): Button;
  createCheckBox(): CheckBox;
}

class WinFactory implements GUIFactory {
  public createButton(): Button {
      return new WinButton()
  }
  public createCheckBox(): CheckBox {
      return new WinCheckBox()
  }
}
class MacFactory implements GUIFactory {
  public createButton(): Button {
      return new MacButton();
  }

  public createCheckBox(): CheckBox {
      return new MacCheckbox();
  }
}
interface Button {
  onCLick(): string
}

interface CheckBox {
  onCLick(): string
}

class WinButton implements Button {
  onCLick(): string {
      return 'Win button'
  }
}

class MacButton implements Button {
  onCLick(): string {
    return 'Mac button'
  }
}

class WinCheckBox implements CheckBox {
  onCLick(): string {
    return 'Win checkbox'
  }
}

class MacCheckbox implements CheckBox {
  onCLick(): string {
    return 'Mac checkbox'
  }
}

const winFactory = new WinFactory();

const winButton = winFactory.createButton();
console.log(winButton.onCLick())

const winCheckBox = winFactory.createCheckBox();
console.log(winCheckBox.onCLick())



const macFactory = new MacFactory();

const macButton = macFactory.createButton();
console.log(macButton.onCLick())

const macCheckBox = macFactory.createCheckBox();
console.log(macCheckBox.onCLick())