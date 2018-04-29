import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ColorViewer from './ColorViewer';

export function ChoseColors({ colors }) {
    return <div className="chose-colors">
        {colors.map(color => (
            <div className="row">
                <ColorViewer color={color} />
            </div>
        ))}
    </div>;
}

ChoseColors.propTypes = {
    colors: PropTypes.array
}

function mapStateToProps(state) {
    return {
        colors: state.choseColors
    };
}

export default connect(mapStateToProps)(ChoseColors);