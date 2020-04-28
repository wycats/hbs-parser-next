export function anyArrow(sequences) {
    let [current, ...tail] = sequences;
    for (let item of tail) {
        current = current.orElse(item);
    }
    return current;
}
