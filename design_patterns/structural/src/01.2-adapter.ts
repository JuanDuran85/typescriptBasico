import { COLORS } from "./helpers/colors.ts";

interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalService {
  public sendPayment(amount: number): void {
    console.debug(
      `%cPaypal process payment. Amount: ${amount} USD`,
      COLORS.blue
    );
  }
}

class StripeService {
  public makeCharge(amount: number): void {
    console.debug(
      `%cStripe processing payment. Amount: ${amount} USD`,
      COLORS.purple
    );
  }
}

class MercadoPagoService {
  public pay(amount: number): void {
    console.debug(
      `%cMercadoPago processing payment. Amount: ${amount}`,
      COLORS.yellow
    );
  }
}

class PayPalAdapter implements PaymentProcessor {
  private readonly service: PayPalService = new PayPalService();
  public processPayment(amount: number): void {
    this.service.sendPayment(amount);
  }
}

class StripeAdapter implements PaymentProcessor {
  private readonly service: StripeService;

  public constructor(stripeService: StripeService) {
    this.service = stripeService;
  }
  public processPayment(amount: number): void {
    this.service.makeCharge(amount);
  }
}

class MercadoPagoAdapter implements PaymentProcessor {
  private readonly service: MercadoPagoService = new MercadoPagoService();
  public processPayment(amount: number): void {
    this.service.pay(amount);
  }
}

function main(): void {
  const paymentAmount: number = 100;

  const paypalProcessor: PaymentProcessor = new PayPalAdapter();
  const stripeProcessor: PaymentProcessor = new StripeAdapter(
    new StripeService()
  );
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter();

  console.debug("Using PayPal:");
  paypalProcessor.processPayment(paymentAmount);

  console.debug("\nUsing Stripe:");
  stripeProcessor.processPayment(paymentAmount);

  console.debug("\nUsing MercadoPago:");
  mercadoPagoProcessor.processPayment(paymentAmount);
}

main();
