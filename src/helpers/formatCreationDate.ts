export function formatCreationDate(time: number): string {
    const dd = Math.floor(time / 1440);
    const hh = Math.floor((time % 1440) / 60);
    const mm = (time % 1440) % 60;

    const hhStr = `${hh < 10 ? '0' + hh : hh}`;
    const mmStr = `${mm < 10 ? '0' + mm : mm}`;

    const timeStr = `${hhStr}:${mmStr}`;

    if (dd > 0) {
        return `${dd} ${dd === 1 ? 'day' : 'days'} ${timeStr} ${hh === 1 ? 'hour' : 'hours'}`
    }

    if (hh > 0) {
        return `${timeStr} ${hh === 1 ? 'hour' : 'hours'}`
    } else {
        return `${timeStr} ${mm === 1 ? 'minute' : 'minutes'}`
    }

    // const hh = Math.floor(time / 60);
    // const mm = time % 60;

    // const hhStr = `${hh < 10 ? '0' + hh : hh}`;
    // const mmStr = `${mm < 10 ? '0' + mm : mm}`;

    // const timeStr = `${hhStr}:${mmStr}`;

    // if (hh > 0) {
    //     return `${timeStr} ${hh === 1 ? 'hour' : 'hours'}`
    // } else {
    //     return `${timeStr} ${mm === 1 ? 'minute' : 'minutes'}`
    // }
}

// export function formatDuration(timeInMinutes: number): string {
//     const dd = Math.floor(timeInMinutes / 1440);
//     const hh = Math.floor((timeInMinutes % 1440) / 60);
//     const mm = (timeInMinutes % 1440) % 60;

//     if (dd > 0) {
//         const dayStr = `${dd} ${dd === 1 ? 'day' : 'days'}`;
//         const hourStr = hh > 0 ? `, ${hh} ${hh === 1 ? 'hour' : 'hours'}` : '';
//         return dayStr + hourStr;
//     }

//     if (hh > 0) {
//         const hourStr = `${hh} ${hh === 1 ? 'hour' : 'hours'}`;
//         const minuteStr = mm > 0 ? `, ${mm} ${mm === 1 ? 'minute' : 'minutes'}` : '';
//         return hourStr + minuteStr;
//     }

//     if (mm > 0) {
//         return `${mm} ${mm === 1 ? 'minute' : 'minutes'}`;
//     }

//     return 'Less than a minute';
// }