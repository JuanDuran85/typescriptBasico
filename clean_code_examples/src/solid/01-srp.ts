(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    public getProductById(id: number) {
      console.log("Getting product by id number: ", id);
    }

    public saveProduct(product: Product) {
      console.log("Saving product on database: ", product);
    }
  }

  class ProductBusinessLogicComponent {
    private readonly productService: ProductService;
    private readonly mailSender: MailSender;

    constructor(productService: ProductService, mailSender: MailSender) {
      this.productService = productService;
      this.mailSender = mailSender;
    }

    public loadProduct(id: number) {
      this.productService.getProductById(id);
    }

    public saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    public notifyClients() {
      this.mailSender.sendEmail(["2N0kZ@example.com"], "to-client");
    }
  }

  class MailSender {
    private readonly masterEmail: string = "2N0kZ@example.com";

    public sendEmail(emailList: string[], template: "to-client" | "to-admins") {
      console.log("Sending email to: ", {
        to: emailList,
        template,
        from: this.masterEmail,
      });
    }
  }

  class CartBusinessLogicComponent {
    public addToCart(productId: number) {
      // add to cart - logic
      console.log("adding product to cart: ", productId);
    }
  }

  const productServices: ProductService = new ProductService();
  const mailSender: MailSender = new MailSender();

  const productBloc: ProductBusinessLogicComponent =
    new ProductBusinessLogicComponent(productServices, mailSender);
  const cartBloc: CartBusinessLogicComponent = new CartBusinessLogicComponent();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
