import * as React from 'react';

interface PeriodState {
    period: string
}

class Period extends React.Component<{}, PeriodState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            period: ""
        }
    }

    render() {
        return(
            <div>
                <form>
                    <select>
                        <option value="一限">一限</option>
                        <option value="二限">二限</option>
                        <option value="三限">三限</option>
                        <option value="四限">四限</option>
                        <option value="五限">五限</option>
                        <option value="六限">六限</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Period;