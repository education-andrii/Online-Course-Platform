function formatCreationDate(date: string): string {
    return date.replace(/\//g, '.')
}
export default formatCreationDate;