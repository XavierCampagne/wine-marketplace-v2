export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'QUANTITY' | 'MILLESIME' | 'CREATED_AT';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'QUANTITY',
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Most Available', slug: 'quantity-desc', sortKey: 'QUANTITY', reverse: true },
  { title: 'Latest Additions', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Oldest Vintages', slug: 'millesime-asc', sortKey: 'MILLESIME', reverse: false },
  { title: 'Newest Vintages', slug: 'millesime-desc', sortKey: 'MILLESIME', reverse: true },
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart',
};