interface MapperFunc<O> {
  (): MapperFunc<O>;
  <I>(subInput: Array<I>): Array<O>;
}

export function map(): typeof map;
export function map<I, O>(mapper: (value: I) => O): MapperFunc<O>;
export function map<I, O>(mapper: (value: I) => O, input: Array<I>): Array<O>;

export function map<I, O>(
  mapper?: (value: I) => O,
  input?: Array<I>
): Array<O> | typeof map | MapperFunc<O> {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    function subFunction(): typeof subFunction;
    function subFunction(subInput: Array<I>): Array<O>;

    function subFunction(subInput?: Array<I>): typeof subFunction | Array<O> {
      if (arguments.length === 0) {
        return subFunction;
      }

      return subInput!.map(mapper!);
    }

    return subFunction;
  }
  return input!.map(mapper!);
}
