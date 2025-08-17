class Document {
    public title: string;
    public year: number;
    public type: string;
    private content: string;
    protected author: string;

    constructor(title: string, year: number, type: string, content: string, author: string) {
        this.title = title;
        this.year = year;
        this.type = type;
        this.content = content;
        this.author = author;
    }

    public clone(): Document {
        return new Document(this.title, this.year, this.type, this.content, this.author);
    }

    public displayInfoDocument(): void {
        console.log(`
            Title: ${this.title}
            Year: ${this.year}
            Type: ${this.type}
            Content: ${this.content}
            Author: ${this.author}
        `);
    }
}


function main() {
    const documentOne: Document = new Document("Document One", 2022, "Type One", "Content One", "Author One");
    const documentTwo: Document = documentOne.clone();
    documentTwo.title = "New Document Two";
    documentOne.title = "Old Document One";
    documentOne.displayInfoDocument();
    documentTwo.displayInfoDocument();

    console.log({ documentOne, documentTwo });
}

main();