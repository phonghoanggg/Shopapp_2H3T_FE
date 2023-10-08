export const MENU_LIST = [
  {
    label: "Men",
    route: { pathname: "/products", query: { gender: "men" } },
  },
  {
    label: "Women",
    route: { pathname: "/products", query: { gender: "women" } },
  },
  {
    label: "Kids",
    route: { pathname: "/products", query: { gender: "kids" } },
  },
  {
    label: "Sale",
    route: { pathname: "/products", query: { discount: true } },
  },
] as const;
