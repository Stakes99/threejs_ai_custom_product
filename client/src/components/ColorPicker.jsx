import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#9EE493',
          '#DAF7DC',
          '#ABC8C0',
          '#70566D',
          '#42273B',
          '#B33951',
          '#F1F7ED',
          '#54494B',
          '#E3D081',
          '#FFFC31',
          '#E94F37',
          '#393E41',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker