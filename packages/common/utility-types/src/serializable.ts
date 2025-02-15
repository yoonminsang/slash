type Primitive = undefined | null | boolean | number | symbol | string;

/**
 * @name Serializable
 * @description
 * JSON으로 직렬화 가능한 타입을 나타냅니다.
 * (undefined | null | boolean | number | symbol | string, Date, toJSON 메서드를 가지는 것, 그리고 그것들을 값으로 가지는 배열 또는 오브젝트)
 */
export type Serializable =
  | Primitive
  | Date // Date.toJSON() -> ISOString (serialized)
  | { toJSON: () => string }
  | readonly Serializable[]
  | Readonly<{ [key: string]: Serializable }>;
