import { ReactNode, createContext, useState } from "react";

export type Book = {
    _id: string;
    authors: string[];
    categories: string[];
    longDescription: string;
    score: string;
    shortDescription: string;
    status: string;
    thumbnailUrl: string;
    title: string;
}

type PropsContext = {
    books: Book[];
    handleSetBooks: (book: Book[]) => void;
}

export const BooksContext = createContext({} as PropsContext);

export function BooksProvider({ children }: { children: ReactNode }) {

    const [books, setBooks] = useState<Book[]>([]);

    function handleSetBooks(book: Book[]) {
        setBooks(book);
    }

    return (
        <BooksContext.Provider value={{
            books,
            handleSetBooks,
        }}
        >
            {children}
        </BooksContext.Provider>
    );
}