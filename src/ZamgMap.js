import { useState } from "react";
import { weatherMapData } from "./zamg";

function ZamgMap(props) {
    const data = weatherMapData(props.date, props.stations ?? false);
    const alt = `ZAMG weather map of ${data.date.format('DD-MM-YYYY')}`;

    const [error, setError] = useState(null);

    function handleError(e) {
        setError(e);
    }

    function handleLoad() {
        setError(null);
    }

    const style = error != null ? { display: "none" } : {};

    return (
        <a href={data.href} target="_blank" rel="noopener noreferrer">
            { error && <p>Not Available (yet)</p>}
            <img src={data.src} alt={alt} onError={handleError} onLoad={handleLoad} style={style}></img>
        </a>
    );
}

export default ZamgMap;
