/*
Implement a function called, areThereDuplicates
which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
* */

export function areThereDuplicatesByMultiPointers(...args: any[]): boolean {

    if (args.length == 0)
        return false;

    // @ts-ignore
    args = args.sort(); // add it after seen solution!!

    for (let i = 0, j = 1; i < args.length; i++, j++) {
       if (args[i] == args[j]) {
           return true
       }
    }

    return false;
}

// [1,2,3]