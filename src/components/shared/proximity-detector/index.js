import { Component } from 'react';

/**
 * Determines whether two DOM elements are within a certain
 * proximity from each other.
 */
class ProximityDetector extends Component {
  constructor(props) {
    super(props);
    this.lip = props.lip;
    this.selectors = props.selectors;
    this.state = {
      areOverlapping: null
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    this.elems = this.selectors.map(sel => document.querySelector(sel));
    this.initialEdges = this.getEdges(this.elems);

    if (this.areOverlapping()) {
      this.setState({ areOverlapping: true });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getEdges(elems) {
    return {
      upper: elems[0].getBoundingClientRect().bottom,
      lower: elems[1].getBoundingClientRect().top
    };
  }
  
  areOverlapping() {
    const adjustedUpper = this.initialEdges.upper * this.lip;
    return this.getEdges(this.elems).lower < adjustedUpper;
  }

  handleResize = () => {
    const overlapping = this.areOverlapping();
    if (!this.state.areOverlapping && overlapping) {
      this.setState({ areOverlapping: true });
    } else if (this.state.areOverlapping && !overlapping) {
      this.setState({ areOverlapping: false });
    }
  }

  render() {
    return this.props.children(this.state.areOverlapping);
  }
}

export default ProximityDetector;
