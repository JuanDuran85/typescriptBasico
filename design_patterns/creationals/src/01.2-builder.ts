import { COLORS } from "./helpers/colors.ts";
class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    this.fields = fields.length <= 0 ? ["*"] : fields
    return this;
  }

  where(condition: string): QueryBuilder {
    this.conditions = condition ? [...this.conditions, condition] : [];
    return this;
  }

  orderBy(field: string, direction: "ASC" | "DESC" = "ASC"): QueryBuilder {
    this.orderFields = [...this.orderFields, `${field} ${direction}`,];
    return this;
  }

  limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  execute(): string {
    const conditionsFinal: string = this.conditions.length > 0 ? `where ${this.conditions.join(" and ")}` : "";
    const orderByFinal: string = this.orderFields.length > 0 ? `order by ${this.orderFields.join(", ")}` : "";
    const limitFinal: string = this.limitCount ? `limit ${this.limitCount}` : "";
    return `select ${this.fields.join(", ")} from ${this.table} ${conditionsFinal} ${orderByFinal} ${limitFinal};`
  }
}

function main() {
  const usersQuery: string = new QueryBuilder("users")
    .select("name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('%cQuery: \n', COLORS.red);
  console.log(usersQuery);
}

main();
