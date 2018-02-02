import React from 'react';
import PropTypes from 'prop-types';
import uuid4 from 'uuid/v4';
import './List.css';

const DefaultRenderer = ({data, className, style}) => {
  return <li style={style} className={className}>{data}</li>
};

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemRenderer: props.itemRenderer || DefaultRenderer,
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.itemRenderer !== nextProps.itemRenderer) {
      this.updateItemRenderer(nextProps.itemRenderer)
    }
  }

  updateItemRenderer(itemRenderer) {
    this.setState({
      itemRenderer: itemRenderer || DefaultRenderer
    });
  }

  renderItem(data, index, ItemRenderer, gapProp) {
    const style = {...gapProp};
    if (index === 0) style.marginLeft = style.marginTop = '0px';
    return (
      <ItemRenderer key={uuid4()} style={style} data={data} className="list--item" />
    );
  }

  render() {
    const {dataProvider, layout = 'b', gap = '0px', className} = this.props;
    const itemRenderer = this.state.itemRenderer;
    const gapStyle = {};
    if (layout === 'h') {
      gapStyle.marginLeft = gap;
    } else if (layout === 'v') {
      gapStyle.marginTop = gap;
    }

    return (
      <ul className={`list list__${layout} ${className}`}>
        {
          dataProvider.map((item, index) => {
            return this.renderItem(item, index, itemRenderer, gapStyle)
          })
        }
      </ul>
    );
  }
}

List.propTypes = {
  dataProvider: PropTypes.array.isRequired,
  itemRenderer: PropTypes.func,
  gap: PropTypes.string,
  layout: PropTypes.oneOf(['b', 'h', 'v']),
  className: PropTypes.string
};

export default List;
