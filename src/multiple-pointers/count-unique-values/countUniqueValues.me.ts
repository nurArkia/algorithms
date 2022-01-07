
// Break It Down
//
export function countUniqueValues(values: number[]): number {

    // variable for the results
    let uniques = 0;
    // 2 pointers for tracking the duplication
    let current = 0, next = 1;

    while(current < values.length) {

        // if the current value != next vale
        if (values[current] != values[next]) {
            // inc uniques counter
            uniques++;
            // assign current to next value
            current = next;
            // inc next
            next++;
        } else {
            // only inc next
            next++
        }

    }

    return uniques;
}