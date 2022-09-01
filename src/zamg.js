import dayjs from "dayjs";

export function weatherMapData(date, stations) {
    const d = lastZamgDate(date);
    const folder = d.format('YYYY/MM/DD');
    const timestamp = d.format('YYMMDDHHmm');
    const query = `tag=${d.format('DD')}&monat=${d.format('MM')}&jahr=${d.format('YYYY')}&utc=00`;

    if (stations) {
        return {
            date: d,
            src: `https://www.zamg.ac.at/fix/wetter/bodenkarte/${folder}/BK_BodAna_k2125_C_${timestamp}.png`,
            href: `https://www.zamg.ac.at/cms/de/wetter/wetterkarte?${query}&dispStat=yes`
        }
    }

    return {
        date: d,
        src: `https://www.zamg.ac.at/fix/wetter/bodenkarte/${folder}/BK_BodAna_Sat_${timestamp}.png`,
        href: `https://www.zamg.ac.at/cms/de/wetter/wetterkarte?${query}`,
    }
}

export function lastZamgDate(date) {
    const d = dayjs(date);
    return d.hour(6 * Math.floor(d.hour() / 6)).minute(0);
}

export function nextZamgDate(zamgDate) {
    return dayjs(zamgDate).add(6, 'hour');
}

export function prevZamgDate(zamgDate) {
    return dayjs(zamgDate).subtract(6, 'hour');
}
