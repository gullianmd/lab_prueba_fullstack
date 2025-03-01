interface ZustandSet<T> {
  (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: false): void;
  (state: T | ((state: T) => T), replace: true): void;
}

declare interface PokeStore {
  sets : SetType[] | null
  setDetail : SetDetailType[] | null
  cardDetail : CardType | null
  getCardDetail : (cardId : string) => void
  getSetDetail : (setId : string) => void
  firstLoad : () => void
}