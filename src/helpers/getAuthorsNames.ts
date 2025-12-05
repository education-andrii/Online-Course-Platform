type Authors = {
    id: string;
    name: string;
}

const getAuthorsNames = (authors: Authors[], courseAuthorsIds: string[]): string => {
    if (authors !== undefined) {
        const authorsArray = courseAuthorsIds.map((author) => authors.find(authorItem => authorItem.id === author));
        return authorsArray.map((author) => author?.name).join(', ');
    } else {
        return '';
    }
}
export default getAuthorsNames;