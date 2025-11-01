type Authors = {
    id: string;
    name: string;
}

export const getAutorsArray = (authors: Authors[], courseAuthorIds: string[]): string[] => {
    if (authors !== undefined) {
        const authorsArray = authors.filter((author) => courseAuthorIds.includes(author.id));
        return authorsArray.map((author) => author.name);
    } else {
        return []
    }
}