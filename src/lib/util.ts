export function ordinalNumber(num: number): string {
    let suff = "th";
    if (num % 100 < 10 || num % 100 > 20) {
        if (num % 10 == 1) {
            suff = "st";
        } else if (num % 10 == 2) {
            suff = "nd";
        } else if (num % 10 == 3) {
            suff = "rd";
        }
    }
    return `${num}${suff}`;
}

export const MONTHS = new Map<number, string>([
    [1, "Jan"],
    [2, "Feb"],
    [3, "Mar"],
    [4, "Apr"],
    [5, "May"],
    [6, "Jun"],
    [7, "Jul"],
    [8, "Aug"],
    [9, "Sep"],
    [10, "Oct"],
    [11, "Nov"],
    [12, "Dec"],
]);

export function title(k: string): string {
    return k.charAt(0).toUpperCase() + k.substring(1).toLowerCase();
}