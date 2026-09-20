import { BookCard } from "@/components/ui/book-card";
import { Title } from "@/components/ui/Title";

import { books } from "@/lib/books";

function Books() {
    return (
        <section id="books" aria-labelledby="books-title" className="mt-20">
            <Title as="h2" id="books-title" className="text-xl">
                Books I&apos;ve Read
            </Title>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10">
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
        </section>
    );
}

export { Books };