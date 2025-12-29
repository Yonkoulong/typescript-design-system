//4. Interface Segregation Principle
//No client should be forced to depend on interfaces they do not use.

interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class SimplePrinter {
  print(document: Document): void {
    console.log("The machine is printing");
  }
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log("The machine is printing");
  }

  scan(document: Document): void {
    console.log("The machine is scanning");
  }

  fax(document: Document): void {
    console.log("The machine is faxing");
  }
}

// ==== example 2

interface Post {
  title: string;
  content: string;
}

interface Create {
  create(post: Post): void;
}

interface Comment {
  comment(post: Post): void;
}

interface Share {
  share(post: Post): void;
}

export class Regular implements Create {
  create(post: Post): void {
    console.log("The user can create this post", post);
  }
}

export class Admin implements Create, Comment, Share {
  create(post: Post): void {
    console.log("The Admin can create this post", post);
  }

  comment(post: Post): void {
    console.log("The Admin can comment this post", post);
  }

  share(post: Post): void {
    console.log("The Admin can share this post", post);
  }
}
