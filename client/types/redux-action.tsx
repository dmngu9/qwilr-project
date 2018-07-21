export interface Action<T, P = void> {
    type: T;
    payload?: P;
}
