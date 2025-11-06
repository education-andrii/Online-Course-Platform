function getCourseDuration(time: number): string {
    if (time >= 0) {

        const dd: number = Math.floor(time / 1440);
        const hh: number = Math.floor((time % 1440) / 60);
        const mm: number = (time % 1440) % 60;

        const hhStr: string = `${hh < 10 ? '0' + hh : hh}`;
        const mmStr: string = `${mm < 10 ? '0' + mm : mm}`;

        const timeStr: string = `${hhStr}:${mmStr}`;

        if (dd > 0) {
            return `${dd} ${dd === 1 ? 'day' : 'days'} ${hh > 0 ? hhStr : ''} ${hh > 0 ? (hh === 1 ? 'hour' : 'hours') : ''}`
        }

        if (hh > 0) {
            return `${timeStr} ${hh === 1 ? 'hour' : 'hours'}`
        } else {
            return `${timeStr} ${mm === 1 ? 'minute' : 'minutes'}`
        }
    } else return "Invalid duration"
}
export default getCourseDuration;