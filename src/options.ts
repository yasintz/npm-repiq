export interface IDefaultOptions {
  uniqueIdKey: string;
}

export interface IOptions extends Partial<IDefaultOptions> {}

export const defaultOptions: IDefaultOptions = {
  uniqueIdKey: 'id',
};
