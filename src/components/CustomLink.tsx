import type { LinkOptions, RegisteredRouter } from "@tanstack/react-router";

export interface MenuProps<TRouter extends RegisteredRouter> {
  items: MenuItem<TRouter>[];
}

export type MenuItem<TRouter extends RegisteredRouter> =
  LinkOptions<TRouter> & {
    to: string;
    permission: string;
    label?: string;
  };
const linkOptions: MenuProps<RegisteredRouter> = {
  items: [
    { to: "/", permission: "" },
    { to: "/login", permission: "", label: "My label" },
  ],
};

console.log(linkOptions.items[0]);

export const CustomLink = () => {
  return <div>CustomLink</div>;
};
