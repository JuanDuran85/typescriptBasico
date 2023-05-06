export enum PassworErrorEnum {
  SHORT = "Passwork is too short!",
  NO_UPPER_CASE = "Upper case letter required!",
  NO_LOWER_CASE = "Lower case letter required!",
  NO_NUMBER = "At least one number required!",
}

export interface CheckResult {
  valid: boolean;
  reasons: PassworErrorEnum[];
}

export class PasswordServiceCheck {
  public checkPassword(password: string): CheckResult {
    const reasons: PassworErrorEnum[] = [];
    this.checkLength(password, reasons);
    this.checkLowerCase(password, reasons);
    this.checkUpperCase(password, reasons);
    return {
      valid: reasons.length > 0 ? false : true,
      reasons,
    };
  }

  public checkAdminPassword(password: string): CheckResult {
    const basicCheck = this.checkPassword(password);
    this.checkForNumber(password, basicCheck.reasons);
    return {
      valid: basicCheck.reasons.length > 0 ? false : true,
      reasons: basicCheck.reasons,
    }
  }

  private checkForNumber(password: string, reasons: PassworErrorEnum[]){
    if(!/\d/.test(password))
    reasons.push(PassworErrorEnum.NO_NUMBER);
  }

  private checkUpperCase(password: string, reasons: PassworErrorEnum[]) {
    if (password === password.toUpperCase())
      reasons.push(PassworErrorEnum.NO_LOWER_CASE);
  }

  private checkLowerCase(password: string, reasons: PassworErrorEnum[]) {
    if (password === password.toLowerCase())
      reasons.push(PassworErrorEnum.NO_UPPER_CASE);
  }

  private checkLength(password: string, reasons: PassworErrorEnum[]) {
    if (password.length < 8)
      reasons.push(PassworErrorEnum.SHORT);
  }
}
