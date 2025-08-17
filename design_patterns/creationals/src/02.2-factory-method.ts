import { COLORS } from "./helpers/colors.ts";

interface Report {
  generate(): void;
}

class SalesReport implements Report {
  public generate(): void {
    console.log("Creating ----> %cSales Report", COLORS.red);
  }

}

class InventoryReport implements Report {
  public generate(): void {
    console.log("Creating ----> %cInventory Report", COLORS.green);
  }

}

class FinancialReport implements Report {
  public generate(): void {
    console.log("Creating ----> %cFinancial Report", COLORS.blue);
  }

}


abstract class ReportFactory {
  protected abstract createReport(): Report;

  public generateReport(): void {
    const report: Report = this.createReport();
    report.generate();
  }
}

class SalesReportFactory extends ReportFactory {
  protected override createReport(): Report {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  protected override createReport(): Report {
    return new InventoryReport();
  }
}

class FinancialReportFactory extends ReportFactory {
  protected override createReport(): Report {
    return new FinancialReport();
  }
}

function main() {
  const reportTypeOptions = {
    sales: new SalesReportFactory(),
    inventory: new InventoryReportFactory(),
    financial: new FinancialReportFactory(),
  };

  const reportType = prompt(
    "¿What type of report do you want?(sales/inventory/financial))"
  );

  const reportFactory = reportTypeOptions[reportType as keyof typeof reportTypeOptions];

  if (!reportFactory) {
    throw new Error("Invalid report type");
  }

  reportFactory.generateReport();
}

main();
