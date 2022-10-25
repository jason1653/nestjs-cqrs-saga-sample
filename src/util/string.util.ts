import * as bcrypt from 'bcrypt';

export class StringUtil {
  /**
   * 암호화
   * @param str
   * @returns
   */
  public static async setPasswordEncode(str: string): Promise<string> {
    const saltOrRounds = 10;
    return bcrypt.hash(str, saltOrRounds);
  }

  public static async passwordCheck(str: string, hash: string) {
    return bcrypt.compare(str, hash);
  }
}
