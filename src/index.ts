import { IOptions, defaultOptions, IDefaultOptions } from './options';

type TListener<GDataType> = (data: GDataType) => void;

class Repiq {
  private _options: IDefaultOptions & IOptions;
  private _seperatedObjects = {};
  private _processSchema = {};
  constructor(options?: IOptions) {
    this._options = Object.assign(defaultOptions, options);

    this.addEventListenerToProcess = this.addEventListenerToProcess.bind(this);
    this.addEventListenerToItem = this.addEventListenerToItem.bind(this);
    this.push = this.push.bind(this);
  }

  push(processId: string, object: any) {
    const processSchema =
  }

  removeItem = (id: string) => {};

  removeProcess = (processId: string) => {};

  addEventListenerToProcess<GDataType = any>(
    processId: string,
    listener: TListener<GDataType>
  ) {}

  addEventListenerToItem<GDataType = any>(
    id: string,
    listener: TListener<GDataType>
  ) {}
}

export default Repiq;
