import * as React from 'react';

interface WeekdayState {
    weekday: string
};

class Weekday extends React.Component<{}, WeekdayState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            weekday: ""
        }
    }

    render() {
        return(
            <div>
                <form>
                    <select>
                        <option value="月曜日">月曜日</option>
                        <option value="火曜日">火曜日</option>
                        <option value="水曜日">水曜日</option>
                        <option value="木曜日">木曜日</option>
                        <option value="金曜日">金曜日</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Weekday;