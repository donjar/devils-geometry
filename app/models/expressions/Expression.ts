import { NotImplementedError } from '../helpers/Errors';

export default abstract class Expression {
  public abstract add(other: Expression): Expression;

  public sub(other): Expression {
    try {
      return this.add(other.negate);
    } catch (e) {
      if (e instanceof NotImplementedError) {
        throw new NotImplementedError('Subtracting with the given expression is not yet supported.');
      }
    }
  }

  public abstract mul(other: Expression): Expression;

  public abstract div(other: Expression): Expression;

  public abstract negate(): Expression;
}
