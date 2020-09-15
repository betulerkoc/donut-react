A donut item using class components. All it does is display and represent a donut.
class DonutUsingClassItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isEaten: false,
    }
  }

  // componentDidMount() {
  //   // Things that you would do here:
  //   // * fetching
  //   // It only calls this after rendering finished.
  //   console.log('class component fetched');
  // }

  render() {
    const handleClick = () => {
      this.setState({
        isEaten: true
      })
    };
    return (<div>
    <div>
      {this.props.flavor}
    </div>
    <div>
      {this.props.topping}
    </div>
    <div>
      {this.state.isEaten ? "we ate this" : "please eat me"}
    </div>
    <button onClick={handleClick}>Eat</button>
    </div>);
  }
}

DonutUsingClassItem.defaultProps = {
  topping: 'none',
  flavor: 'plain',
};