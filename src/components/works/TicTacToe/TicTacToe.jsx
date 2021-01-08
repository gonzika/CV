import './TicTacToe.scss';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square onClick={() => this.props.onClick(i)} value={this.props.squares[i]} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            activeBtn: '',
        };
        this.actBtn = React.createRef();
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    jumpTo(step, btn) {
        try {
            this.state.activeBtn.classList.remove('reload--active')
        } catch (error) { }
        btn.target.classList.add('reload--active')

        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            activeBtn: btn.target
        });
    }

    componentDidMount() {
        this.setState({ activeBtn: this.actBtn.current });
    }

    componentDidUpdate() {
        if (this.actBtn.current !== this.state.activeBtn) {
            try {
                this.state.activeBtn.classList.remove('reload--active')
            } catch (error) { }
            try {
                this.setState({ activeBtn: this.actBtn.current });
            } catch (error) { }
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            let thisMove = history[move].squares
            const desc = move ?
                'Перейти к ходу #' + move :
                'К началу игры';
            let key = 0;
            return (
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div key={move} className='move-history'>
                        <div className='table-moves'>{thisMove.map(e => !e ? <span>&nbsp;</span> : <span>{e}</span>)}</div>
                        <button key={key++} ref={this.actBtn} onClick={(e) => this.jumpTo(move, e)} className={`reload reload--active`}>{desc}</button>
                    </div>
                </ReactCSSTransitionGroup>

            );
        });

        let status;
        if (winner) {
            status = 'Выиграл ' + winner;
        } else {
            status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className='status'>{status}</div>
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{moves}</div>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let count = 0
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
        if (squares[a] && squares[b] && squares[c]) count++
    }
    if (count === lines.length) return 'дядя Петя'
    else return null;
}

export default Game;