import dayjs from 'dayjs';
import React from 'react';
import ZamgMap, { lastZamgDate, nextZamgDate, prevZamgDate } from './ZamgMap';
import './ZamgView.css';

class ZamgView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: lastZamgDate(props.date ?? dayjs())
        };
        if (!this.state.date.isSame(props.date)) {
            this.props.onDateChange(this.state.date);
        }
    }

    show(date) {
        this.setState(state => ({
            date
        }));
        this.props.onDateChange(date);
    }

    showPrevious() {
        this.show(this.prevDate);
    }

    showNext() {
        this.show(this.nextDate);
    }

    get nextDate() {
        return nextZamgDate(this.state.date);
    }

    get prevDate() {
        return prevZamgDate(this.state.date);
    }

    get hasNext() {
        return !this.nextDate.isAfter(dayjs());
    }

    render() {
        const prevButtonLabel = this.prevDate.format('DD.MM.YYYY HH:mm');
        const nextButtonLabel = this.nextDate.format('DD.MM.YYYY HH:mm');
        return (
            <div class="Zamg">
                <ZamgMap date={this.state.date} className="Zamg-map" />
                <div>
                    <button onClick={() => this.showPrevious()}>&lt; {prevButtonLabel} &lt;</button>
                    <button onClick={() => this.showNext()} disabled={!this.hasNext}>&gt; {nextButtonLabel} &gt;</button>
                </div>
            </div>
        )
    }
}

export default ZamgView;
