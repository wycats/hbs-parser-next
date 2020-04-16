const GUIDS = new WeakMap<object, string>();

export default class GuidService {
  #guid = 1;

  guid(obj: object): string {
    let guid = GUIDS.get(obj);

    if (guid) {
      return guid;
    }

    guid = `${this.#guid++}`;
    GUIDS.set(obj, guid);
    return guid;
  }
}
