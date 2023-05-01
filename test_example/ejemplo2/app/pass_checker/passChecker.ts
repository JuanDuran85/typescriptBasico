export enum PassworErrorEnum {
  SHORT = "Passwork is too short!",
  NO_UPPER_CASE = "Upper case letter required!",
  NO_LOWER_CASE = "Lower case letter required!",
}

export interface CheckResult {
  valid: boolean;
  reasons: PassworErrorEnum[];
}

export class PasswordServiceCheck {
  public checkPassword(password: string): CheckResult {
    const reasons: PassworErrorEnum[] = [];
    if (password.length < 8) reasons.push(PassworErrorEnum.SHORT);
    if (password === password.toLowerCase())
      reasons.push(PassworErrorEnum.NO_UPPER_CASE);
    if (password === password.toUpperCase())
      reasons.push(PassworErrorEnum.NO_LOWER_CASE);
    return {
      valid: reasons.length > 0 ? false : true,
      reasons,
    };
  }
}
