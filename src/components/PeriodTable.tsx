import * as React from 'react';


class PeriodTable extends React.Component {

    render() {
        const weekday = ["月曜", "火曜", "水曜", "木曜", "金曜"];
        const period = ["一限目", "二限目", "三限目", "四限目", "五限目", "六限目"];
        let i;
        let periodRowFirst = [];
        let periodRowSecond = [];
        let periodRowThird = [];
        let periodRowFourth = [];
        let periodRowFifth = [];
        let periodRowSixth = [];

        for(i=0; i<weekday.length; i++) {
            periodRowFirst.push("一限目");
        };
        for(i=0; i<weekday.length; i++) {
            periodRowSecond.push("二限目");
        };
        for(i=0; i<weekday.length; i++) {
            periodRowThird.push("三限目");
        };
        for(i=0; i<weekday.length; i++) {
            periodRowFourth.push("四限目");
        };
        for(i=0; i<weekday.length; i++) {
            periodRowFifth.push("五限目");
        };
        for(i=0; i<weekday.length; i++) {
            periodRowSixth.push("六限目");
        };

        return(
            <div>
                <table>
                    <tr>
                        {weekday.map((day, index) => {
                            return <th key={index}>{day}</th>
                        })}
                    </tr>
                    <tr>
                        {periodRowFirst.map((period, index) => {
                            return <td key={index}>{period}</td>
                        })}
                    </tr>
                    <tr>
                        {periodRowSecond.map((period, index) => {
                            return <td key={index}>{period}</td>
                        })}
                    </tr>
                    <tr>
                        {periodRowThird.map((period, index) => {
                            return <td key={index}>{period}</td>
                        })}
                    </tr>
                    <tr>
                        {periodRowFourth.map((period, index) => {
                            return <td key={index}>{period}</td>
                        })}
                    </tr>
                    <tr>
                        {periodRowFifth.map((period, index) => {
                            return <td key={index}>{period}</td>
                        })}
                    </tr>
                    <tr>
                        {periodRowSixth.map((period, index) => {
                            return <td key={index}>{period}</td>
                        })}
                    </tr>
                </table>
            </div>
        )
    }
}

export default PeriodTable;