import React, { Component, Fragment } from 'react'

class Board extends Component {
    state = {
        boardList: [
            {
                no: 1,
                title: "Test 1",
                tmpdate: new Date()
            },
            {
                no: 2,
                title: "Test 2",
                tmpdate: new Date()
            }
        ]
    }

    render() {
        const { boardList } = this.state;

        return (
            <Fragment>
                <div>
                    <table>
                        <thead>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Date</th>
                        </thead>
                        <tbody>
                        {
                            boardList.map(row =>
                                (<BoardItem key= {row.no} row={row} />)
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div>
                    {<BoardPage />}
                </div>
            </Fragment>
        );
    }
}

class BoardItem extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.row.no}</td>
                <td>{this.props.row.title}</td>
                <td>{this.props.row.tmpdate.toLocaleDateString('ko-KR')}</td>
            </tr>
        )
    }
}

class BoardPage extends Component {
    render() {
        return(
            <div class="center">
                <ul class="pagination">
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                    <li class="active"><a href="#!">1</a></li>
                    <li class="waves-effect"><a href="#!">2</a></li>
                    <li class="waves-effect"><a href="#!">3</a></li>
                    <li class="waves-effect"><a href="#!">4</a></li>
                    <li class="waves-effect"><a href="#!">5</a></li>
                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
        )
    }
}
export default Board