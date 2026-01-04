interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  public render(): void {
    console.log("Render a button in Windows Style");
  }

  public onClick(f: Function): void {
    console.log("Windows button was clicked");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in Windows Style");
  }

  toggle(): void {
    this.button.onClick(() => {
      console.log("Window checkbox toggled");
    });
  }
}

class WindowsFactory implements GUIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }

  public createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}

class MacosButton implements Button {
  public render(): void {
    console.log("Render a button in Macos Style");
  }

  public onClick(f: Function): void {
    console.log("Macos button was clicked");
    f();
  }
}

class MacosCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in Macos Style");
  }

  toggle(): void {
    this.button.onClick(() => {
      console.log("Macos checkbox toggled");
    });
  }
}

class MacosFactory implements GUIFactory {
  public createButton(): Button {
    return new MacosButton();
  }

  public createCheckbox(button: Button): Checkbox {
    return new MacosCheckbox(button);
  }
}

function renderUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => {
    console.log("Button Clicked");
  });

  checkbox.toggle();
}

renderUI(new WindowsFactory());
renderUI(new MacosFactory());
