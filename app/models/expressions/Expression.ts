export default abstract class Expression {
  public abstract add(other: Expression): Expression;
  public abstract sub(other: Expression): Expression;
  public abstract mul(other: Expression): Expression;
  public abstract div(other: Expression): Expression;
}
