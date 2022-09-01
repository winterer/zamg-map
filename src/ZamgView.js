import dayjs from 'dayjs';
import React from 'react';
import { lastZamgDate, nextZamgDate, prevZamgDate } from './zamg';
import ZamgMap from './ZamgMap';
import './ZamgView.css';

class ZamgView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: lastZamgDate(props.initialDate ?? dayjs()),
            stations: false,
        };
        if (!this.state.date.isSame(props.initialDate)) {
            this.props.onDateChange(this.state.date);
        }
    }

    show(date) {
        this.setState(state => ({
            date
        }));
        this.props.onDateChange(date);
    }

    toggleStations() {
        this.setState(state => ({
            stations: !state.stations
        }));
    }

    render() {
        const prevDate = prevZamgDate(this.state.date);
        const nextDate = nextZamgDate(this.state.date);
        const hasNext = !nextDate.isAfter(dayjs());
        const prevButtonLabel = prevDate.format('DD.MM.YYYY HH:mm');
        const nextButtonLabel = nextDate.format('DD.MM.YYYY HH:mm');

        return (
            <div className="Zamg">
                <button onClick={() => this.toggleStations()}>{this.state.stations ? "Weather" : "Stations"}</button>
                <ZamgMap date={this.state.date} stations={this.state.stations} className="Zamg-map" key={this.state.date} />
                <div>
                    <button onClick={() => this.show(prevDate)}>&lt; {prevButtonLabel} &lt;</button>
                    <button onClick={() => this.show(nextDate)} disabled={!hasNext}>&gt; {nextButtonLabel} &gt;</button>
                </div>
            </div>
        );
    }
}

export default ZamgView;
