import BaseRouteSchema, { withCustomUniqueId } from 'route-schema';
import { IOptions, defaultOptions, IDefaultOptions } from './options';
import { objectKeys } from './utils';

class Repiq {
  private _helper: typeof BaseRouteSchema;
  private _options: IDefaultOptions & IOptions;
  private _seperatedObjects: Record<string, any> = {};
  private _processSchema: Record<string, any> = {};
  constructor(options?: IOptions) {
    this._options = Object.assign(defaultOptions, options);
    this._helper = withCustomUniqueId(this._options.uniqueIdKey);

    this.push = this.push.bind(this);
    this.removeProcess = this.removeProcess.bind(this);
    this.deepMergeSeperatedObjects = this.deepMergeSeperatedObjects.bind(this);
    this.getProcess = this.getProcess.bind(this);
    this.hasProcess = this.hasProcess.bind(this);
    this.createProcess = this.createProcess.bind(this);
    this.pushWithProcess = this.pushWithProcess.bind(this);
  }

  push(object: any) {
    const seperatedData = this._helper.separateData(object);
    if (seperatedData !== object) {
      this.deepMergeSeperatedObjects(seperatedData);
    }
  }

  createProcess(processId: string, object: any) {
    const objectSchema = this._helper.dataToSchema(object);
    if (objectSchema !== null) {
      this._processSchema[processId] = objectSchema;
    }
  }
  pushWithProcess(processId: string, object: any) {
    this.push(object);
    this.createProcess(processId, object);
  }

  removeProcess(processId: string) {
    delete this._processSchema[processId];
  }

  getProcess(processId: string) {
    const schema = this._processSchema[processId];
    if (!schema) {
      return undefined;
    }

    return this._helper.schemaToData(schema, this._seperatedObjects);
  }

  hasProcess(processId: string) {
    const schema = this._processSchema[processId];
    return Boolean(schema);
  }

  private deepMergeSeperatedObjects(newData: any) {
    const modifiedData: Record<string, any> = {};
    objectKeys(newData).forEach(id => {
      modifiedData[id] = { ...this._seperatedObjects[id], ...newData[id] };
    });

    this._seperatedObjects = { ...this._seperatedObjects, ...modifiedData };
  }
}

export default Repiq;
