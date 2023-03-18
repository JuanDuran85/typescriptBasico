/**
 *
 *
 * Builder Pattern: is one of Creational Design Pattern designed to construct objects which typically requires a long list of arguments. It allows you to create multiple different but also similar objects with the Builder class. The Builder creates part of the object step by step. The Director manages the way of assembling the parts together. The role of the Director is to provide separation between calling the client and the Builder. In some cases, the pattern is implemented without a Director. It means the client invokes the builder methods directly and obtains the result.
 *
 *
 * The Builder design pattern solves problems like:
 *  -How can a class (the same construction process) create different representations of a complex object?
 *  -How can a class that includes creating a complex object be simplified?
 *
 *
 * Creating and assembling the parts of a complex object directly within a class is inflexible. It commits
 * the class to creating a particular representation of the complex object and makes it impossible to change
 * the representation later independently from (without having to change) the class.
 *
 * The Builder design pattern describes how to solve such problems:
 *  -Encapsulate creating and assembling the parts of a complex object in a separate Builder object.
 *  -   A class delegates object creation to a Builder object instead of creating the objects directly.
 *
 *
 */

// First attempt (creating an EventFilterBuilder Class)

interface OrderFilter {
  category: string;
  status: string | string[];
  openOnly: boolean;
}

class EventFilterBuilder {
  private filterResult: { [key: string]: string } = {};

  public setCategoryFilter(category: string): this {
    if (category) {
      this.filterResult.categoryFilter = `category eq '${category}'`;
    }

    return this;
  }

  public setOpenOnlyFilter(openOnly: boolean): this {
    if (openOnly) {
      this.filterResult.openOnly = `(deleted eq 0)`;
    }
    return this;
  }

  public setStatusFilter(status: string | string[]): this {
    const statusList = Array.isArray(status) ? status : [status];

    this.filterResult.statusFilter = `(${this.buildFilterFromArray(
      statusList,
      "status"
    )})`;
    return this;
  }

  public build(): string {
    const filters: string[] = [
      this.filterResult.categoryFilter,
      this.filterResult.openOnly,
      this.filterResult.statusFilter,
    ].filter(Boolean);
    return filters?.length > 0 ? filters.join(" or ") : "";
  }

  protected buildFilterFromArray(values: string[], prop: string): string {
    return values?.map((val) => `${prop} eq '${val}'`).join(` or `) ?? "";
  }
}

const orderFilter: OrderFilter = {
  category: "electronic",
  status: ["apporved", "paid"],
  openOnly: true,
};

// The new builder can be invoked from the client:

const filterResult: string = new EventFilterBuilder()
  .setCategoryFilter(orderFilter.category)
  .setStatusFilter(orderFilter.status)
  .setOpenOnlyFilter(orderFilter.openOnly)
  .build();
console.log(filterResult);

//------------------------------------------------------
// Make the internal state immutable
//------------------------------------------------------

class EventFilterBuilder2 {
  private filterResult2: { readonly [key: string]: string } = {};

  constructor(private current = {}) {
    this.filterResult2 = current;
  }

  public setCategoryFilter2(category: string): EventFilterBuilder2 {
    return new EventFilterBuilder2({
      ...this.filterResult2,
      category: category ? `category eq '${category}'` : undefined,
    });
  }

  public setOpenOnlyFilter2(openOnly: boolean): EventFilterBuilder2 {
    return new EventFilterBuilder2({
        ...this.filterResult2,
        openOnly: openOnly ? `(deleted eq 0)`: undefined
    });
  }

  public setStatusFilter2(status: string | string[]): EventFilterBuilder2 {
    const statusList = Array.isArray(status) ? status : [status];
    return new EventFilterBuilder2({
        ...this.filterResult2,
        statusList: statusList ? `(${this.buildFilterFromArray(
            statusList,
            "status"
          )})` : undefined
    })
  }

  public build2() {
    const filters2: string[] = Object.values(this.filterResult2).filter(
      Boolean
    );
    return filters2?.length > 0;
  }

  protected buildFilterFromArray(values: string[], prop: string): string {
    return values?.map((val) => `${prop} eq '${val}'`).join(` or `) ?? "";
  }
}

const filterResult2 = new EventFilterBuilder2()
  .setCategoryFilter2(orderFilter.category)
  .setStatusFilter2(orderFilter.status)
  .setOpenOnlyFilter2(orderFilter.openOnly)
  .build2();
console.log(filterResult2);