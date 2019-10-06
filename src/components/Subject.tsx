import * as React from 'react';

interface SubjectState {
    subject: string
}

class Subject extends React.Component<{}, SubjectState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            subject: ""
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" />
                </form>
            </div>
        )
    }
}

export default Subject;