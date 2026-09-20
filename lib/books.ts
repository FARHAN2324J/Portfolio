export type Book = {
  id: string;
  title: string;
  image: string;
};

export const books: readonly Book[] = [
  {
    id: "clean-code",
    title: "Clean Code",
    image: "/images/books/Cover3.webp",
  },
  {
    id: "apprenticeship-patterns",
    title: "Apprenticeship Patterns",
    image: "/images/books/Cover.webp",
  },
  {
    id: "the-pragmatic-programmer",
    title: "The Pragmatic Programmer",
    image: "/images/books/Cover2.webp",
  },
];
