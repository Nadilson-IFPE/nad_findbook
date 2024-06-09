import { useCallback } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/Tag";
import { Book } from "../../context/booksContext";

type Props = {
    id: string;
    book: Book;
};


const Card = ({ id, book }: Props) => {

    const navigate = useNavigate();

    const handleSelectBook = useCallback(() => {
        navigate(`/${id}`);
    }, [id, navigate]);

    return (
        <div className="p-4 grid grid-cols-3 gap-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full">
            <img
                src={book.thumbnailUrl}
                alt=""
                className="col-span-1 w-full rounded-lg"
            />
            <div className="col-span-2">
                <p className="font-bold text-2xl text-evergreen">{book.title}</p>
                <p className="font-light text-lg text-gray-500 mb-2">{book.authors[0]}</p>
                <Tag title={book.categories[0]} className="mb-3" />
                {book.shortDescription && (
                    <p>
                        <strong>Sinopse:</strong> {book.shortDescription}
                    </p>
                )}
                <Button
                    title="Ver mais"
                    variant="light"
                    className="w-1/2"
                    onClick={handleSelectBook}
                />
            </div>
        </div >
    );
}

export default Card;