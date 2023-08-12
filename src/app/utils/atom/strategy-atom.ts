export interface StrategyType<T> {
  handle(data?: {}): T;
}
