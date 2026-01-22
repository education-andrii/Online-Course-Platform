
// Logic for replacing an entire author's name that doesn't fit on one line with '...'

function truncateNames(namesArray: string[]): string {
    const MAX_NAMES: number = 2;
    let namesToDisplay: string[] = [...namesArray];

    if (namesToDisplay.length > MAX_NAMES) {
        namesToDisplay = namesToDisplay.slice(0, MAX_NAMES);
        namesToDisplay.push('...')
    }
    return namesToDisplay.join(', ');
}
export default truncateNames;