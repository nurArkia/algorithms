
/*
Implement a function called, areThereDuplicates
which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
* */

export function areThereDuplicates(...args: any[]): boolean {

    const counts: any = {};

    for (let i = 0; i < args.length; i++) {

        const value = args[i];

        if (counts[value] == 1) {
            return  true;
        }

        counts[value] = 1;
    }

    return false;
}