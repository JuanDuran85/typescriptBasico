import {
  PasswordServiceCheck,
  CheckResult,
  PassworErrorEnum,
} from "../../app/pass_checker/passChecker";

describe("PasswordServiceCheck", () => {
  let sut: PasswordServiceCheck;

  beforeEach(() => {
    sut = new PasswordServiceCheck();
  });

  it("Password with less than 8 chars is invalid", () => {
    const actual: CheckResult = sut.checkPassword("1234567");
    expect(actual.valid).toBeFalsy();
    expect(actual.reasons).toContain(PassworErrorEnum.SHORT);
  });

  it("Password with more than 8 chars is ok", () => {
    const actual: CheckResult = sut.checkPassword("12345678Ab");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).toHaveLength(0);
  });

  it("Password with no upper case latter is invalid", () => {
    const actual: CheckResult = sut.checkPassword("1234abcd");
    expect(actual.valid).toBeFalsy();
    expect(actual.reasons).toContain(PassworErrorEnum.NO_UPPER_CASE);
  });

  it("Password with upper case latter is valid", () => {
    const actual: CheckResult = sut.checkPassword("1234abcdA");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).toHaveLength(0);
  });

  it("Password with no lower case latter is invalid", () => {
    const actual: CheckResult = sut.checkPassword("1234ABCD");
    expect(actual.valid).toBeFalsy();
    expect(actual.reasons).toContain(PassworErrorEnum.NO_LOWER_CASE);
  });

  it("Password with lower case latter is valid", () => {
    const actual: CheckResult = sut.checkPassword("1234ABCDa");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).toHaveLength(0);
  });

  it('Complex password is valid', () => {
    const actual: CheckResult = sut.checkPassword("1234abcdEFGH");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).toHaveLength(0);
  });

  it('Admin password with no number is invalid', () => {
    const actual: CheckResult = sut.checkAdminPassword('dsdfADFG');
    expect(actual.valid).toBeFalsy();
    expect(actual.reasons).toContain(PassworErrorEnum.NO_NUMBER);
  });

  it('Admin password with number is valid', () => {
    const actual: CheckResult = sut.checkAdminPassword('d4556FG45346');
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).not.toContain(PassworErrorEnum.NO_NUMBER);
  });
});
