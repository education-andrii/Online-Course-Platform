type Authors = {
    id: string;
    name: string;
}

const getAuthorsNames = (authors: Authors[], courseAuthorsIds: string[]): string[] => {
    if (authors !== undefined) {
        const authorsArray = authors.filter((author) => courseAuthorsIds.includes(author.id));
        return authorsArray.map((author) => author.name);
    } else {
        return []
    }
}
export default getAuthorsNames;