const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

export type Order = "asc" | "desc";

const getComparator = <
    Key extends keyof Record<string | number | symbol, string | number>,
>(
    order: Order,
    orderBy: Key,
): ((
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number) => {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};

export const useOrderBy = <
    T extends Record<string | number | symbol, string | number>,
>(
    array: readonly T[],
    order: Order,
    orderBy: keyof T,
) => {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const orderEl = getComparator(order, orderBy)(a[0], b[0]);
        if (orderEl !== 0) {
            return orderEl;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
};
