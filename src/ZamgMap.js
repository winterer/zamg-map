import dayjs from "dayjs";

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

function ZamgMap(props) {
    const date = dayjs(props.date);
    const folder = date.format('YYYY/MM/DD');
    const timestamp = date.format('YYMMDDHHmm');

    const url = `https://www.zamg.ac.at/fix/wetter/bodenkarte/${folder}/BK_BodAna_Sat_${timestamp}.png`;

    return (
        <img src={url} alt={props.url}></img>
    );
}

export default ZamgMap;
