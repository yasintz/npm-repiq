import { IOptions, defaultOptions, IDefaultOptions } from './options';

type TListener<GDataType> = (data: GDataType) => void;

class Repiq {
  private _options: IDefaultOptions & IOptions;
  private _seperatedObjects = {};
  constructor(options?: IOptions) {
    this._options = Object.assign(defaultOptions, options);

    this.addEventListenerToProcess = this.addEventListenerToProcess.bind(this);
    this.addEventListenerToItem = this.addEventListenerToItem.bind(this);
  }

  push = (processId: string, object: any) => {
    
  };

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
