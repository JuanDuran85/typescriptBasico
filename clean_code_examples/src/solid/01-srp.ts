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

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBusinessLogicComponent {
    public loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    public saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }

    public notifyClients() {
      console.log("Enviando correo a los clientes");
    }
  }

  class MailSender {
    private masterEmail: string = "2N0kZ@example.com";

    public sendEmail(emailList: string[], template: 'to-client' | 'to-admins') {
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

  const productBloc: ProductBusinessLogicComponent =
    new ProductBusinessLogicComponent();
const cartBloc: CartBusinessLogicComponent = new CartBusinessLogicComponent();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
