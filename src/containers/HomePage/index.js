import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import {
  ActionBar,
  Layout,
  AddCircleButton,
  TableSelectPanel,
  PopoverWrapper,
  DrawPanel,
} from 'components';
import tables from 'constants/tables';
import { copyTable, deleteTable } from 'reducers/tables/actions';
import { tablesInfoSelector, currentFloorSelector } from 'reducers/tables/selectors';

import styles from './styles';

const mapStateToProps = state => ({
  tables: tablesInfoSelector(state),
  currentFloor: currentFloorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  deleteTable: () => dispatch(deleteTable()),
  copyTable: () => dispatch(copyTable()),
});

class HomePage extends React.Component {

  componentDidMount() {
  }

  getNewId = () => {
    let i = 1;
    while (true) {
      if (this.state.tables.findIndex(table => table.id === i) === -1) break;
      i++;
    }
    return i;
  }

  render() {
    const { currentFloor, deleteTable, copyTable } = this.props;
    const actions = [
      { icon: 'delete_forever', action: deleteTable },
      { icon: 'content_copy', action: copyTable },
      {
        icon: 'more_vert',
        dropdownItems: [
          { label: 'Select All' },
          { label: 'Upload CSV...' },
        ],
      },
    ];
    return (
      <div style={styles.container}>
        <ActionBar actions={actions} />
        <DrawPanel tables={currentFloor.toJS()} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
