interface Box<T> {
  value: T;
  update(value: T): void;
}

export type Destructor = () => void;

export function bind(element: HTMLElement, box: Box<unknown>): Destructor {
  let { get, set } = inputKind(element);

  set(box.value);

  function update(): void {
    console.log(get());
    box.update(get());
  }

  element.addEventListener("input", update);

  return () => element.removeEventListener("input", update);
}

export function box(
  object: { [key: string]: unknown },
  prop: string
): Box<unknown> {
  return {
    value: object[prop],
    update(value: unknown) {
      object[prop] = value;
    },
  };
}

function inputKind(
  element: HTMLElement
): { get(): unknown; set(value: unknown): void } {
  if (element.tagName === "TEXTAREA") {
    return {
      get: () => (element as HTMLTextAreaElement).value,
      set: value => ((element as HTMLTextAreaElement).value = value as string),
    };
  } else if (element.tagName === "INPUT") {
    switch ((element as HTMLInputElement).type) {
      case "text":
        return {
          get: () => (element as HTMLInputElement).value,
          set: value => ((element as HTMLInputElement).value = value as string),
        };
      case "checkbox":
        return {
          get: () => (element as HTMLInputElement).checked,
          set: value =>
            ((element as HTMLInputElement).checked = value as boolean),
        };
    }
  }

  throw new Error(`bind is only implemented for text, checkbox or textarea`);
}
