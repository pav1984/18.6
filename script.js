var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    componentWillMount: function () {
        console.log('wywoływana tuż przed zamontowaniem komponentu')
    },
    componentDidMount: function () {
        console.log('metoda powoduje rozpoczęcie etapu aktualizacji komponentu')
    },
    componentWillReceiveProps: function (nextProps) {
        console.log('metoda porównuje propsy (this.props z nextProps) i sprawdza czy coś się w rzeczywistości zmieniło')
    },
    shouldComponentUpdate: function(nextProps,nextState) {
        console.log('metode wykorzystujemy do optymalizacji naszej aplikacji,zwraca wartości boolan')
        return true
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('podobne działanie jak metoda componentWillMount')
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log('dobre miejsce na zmiany w DOM jeśli takowe są potrzebne')
    },
    componentWillUnmount: function () {
        console.log('wywoływana przed usunięciem komponentu z DOM,anulowanie zdarzeń itp.')
    },


    render: function () {
        return React.createElement('div', {className: 'count'},
        React.createElement('button', {
            onClick: this.increment
        },'dodawanie'),
        React.createElement('span', {}, 'Licznik ' + this.state.counter),
        React.createElement('button', {
            onClick: this.decrement
        }, 'odejmowanie'),
            
        );
    }
});
var element = React.createElement('div', {},
React.createElement(Counter),
React.createElement(Counter),
React.createElement(Counter),
React.createElement(Counter));

ReactDOM.render(element, document.getElementById('app'));

