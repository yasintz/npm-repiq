export type MaybeArray<T> = T | T[] | null;

export type Schema = {
  id: string;
  props: {
    [key: string]: MaybeArray<Schema>;
  };
};

export type SeparatedObject = any;

export type UserData = any;
