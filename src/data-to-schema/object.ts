import { objectForeach } from '../utils';
import { Schema, MaybeArray } from '../helpers';

function objectDataToScheme(
  data: any,
  uniqueId: string,
  baseFn: (childData: any) => MaybeArray<Schema>
) {
  const route: Schema = {
    id: data[uniqueId],
    props: {},
  };
  objectForeach(data, (key, value) => {
    if (typeof value === 'object') {
      const result = baseFn(value);
      if (result !== null && route.props) {
        route.props[key] = result;
      }
    }
  });

  return route;
}

export default objectDataToScheme;
