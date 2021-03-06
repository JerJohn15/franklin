import React, { PropTypes } from 'react';
import Immutable from 'immutable';

import Annotation from '../Annotation';
import { getAnnotationSegments } from '../../utils/positionning';

const { object, instanceOf, number } = PropTypes;


const Annotations = (props) =>
  <g>
    {
      props.labels.map((label, labelIndex) =>
        label.annotations.map((annotation, annotationIndex) =>
          <Annotation
            key={annotationIndex}
            label={label}
            labelId={labelIndex}
            annotation={annotation}
            isSelected={false}
            getAnnotationSegments={(indexFrom, indexTo) => getAnnotationSegments(
              indexFrom - props.positionFrom + 1,
              indexTo - props.positionFrom + 1,
              labelIndex, // current track
              props.visualizerMargin,
              props.nucleotidesPerRow,
              props.nucleotideWidth,
              props.rowHeight,
              props.nucleotidesRowHeight,
              props.trackHeight
            )}
            positionFrom={props.positionFrom}
          />
        )
      )
    }
  </g>
;

Annotations.propTypes = {
  labels: instanceOf(Immutable.List).isRequired,
  visualizerMargin: object.isRequired,
  nucleotidesPerRow: number.isRequired,
  nucleotidesRowHeight: number.isRequired,
  nucleotideWidth: number.isRequired,
  trackHeight: number.isRequired,
  rowHeight: number.isRequired,
  positionFrom: number.isRequired,
};

export default Annotations;
