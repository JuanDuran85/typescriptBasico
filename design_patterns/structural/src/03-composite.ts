interface FileSystemComponent {
  showDetails(indent?: string): void;
}

class File implements FileSystemComponent {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public showDetails(indent: string = " "): void {
    console.debug(`${indent}- File: ${this.name}`);
  }
}

class Folder implements FileSystemComponent {
  private name: string;
  private contents: FileSystemComponent[] = [];

  public constructor(name: string) {
    this.name = name;
  }
  public showDetails(indent: string = " "): void {
    console.debug(`${indent}+ Folder: ${this.name}`);
    this.contents.forEach((component: FileSystemComponent) =>
      component.showDetails(`${indent}  `)
    );
  }

  public addComponent(component: FileSystemComponent) {
    this.contents.push(component);
  }
}

function main() {
  const file1: File = new File("fileName01.txt");
  const file2: File = new File("fileName02.txt");
  const file3: File = new File("fileName03.txt");
  const file4: File = new File("fileName04.txt");

  const folder1: Folder = new Folder("Folder 01");
  folder1.addComponent(file1);
  folder1.addComponent(file2);

  folder1.showDetails();

  const folder2: Folder = new Folder("Folder 02");
  folder2.addComponent(file3);

  folder2.showDetails();

  const folder3: Folder = new Folder("Folder 03");
  folder3.addComponent(file4);

  folder3.showDetails();

  const rootFolder: Folder = new Folder("Root Folder");
  rootFolder.addComponent(folder1);
  rootFolder.addComponent(folder2);

  folder2.addComponent(folder3);
  rootFolder.showDetails();
}

main();
