import React, { useState } from 'react'

const ColorPicker = () => {
  const [hue, pickHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, pickSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, pickLightness] = useState(Math.ceil(Math.random() * 100))
  const [alpha, setAlpha] = useState(Math.random().toFixed(1))

  const GetRandomColor = () => {
    pickHue(Math.ceil(Math.random() * 360))
    pickSaturation(Math.ceil(Math.random() * 100))
    pickLightness(Math.ceil(Math.random() * 100))
    setAlpha(Math.random().toFixed(1))
  }

  return (
    <main
      className='body'
      style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)` }}
    >
      <h1>Color Picker</h1>
      <div>
        <section>
          <span class='textBox'>
            <p>
              Hue is: <span>{hue}</span>
            </p>
          </span>
          <input
            type='range'
            min='0'
            max='360'
            value={hue}
            onChange={x => {
              pickHue(x.target.value)
            }}
          />
        </section>
        <section>
          <span class='textBox'>
            <p>
              Saturation is: <span>{saturation}%</span>
            </p>
          </span>
          <input
            type='range'
            min='0'
            max='100'
            value={saturation}
            onChange={x => {
              pickSaturation(x.target.value)
            }}
          />
        </section>
        <section>
          <span class='textBox'>
            <p>
              Lightness is: <span>{lightness}%</span>
            </p>
          </span>
          <input
            type='range'
            min='0'
            max='100'
            value={lightness}
            onChange={x => {
              pickLightness(x.target.value)
            }}
          />
        </section>
        <section>
          <span class='textBox'>
            <p>
              Alpha is: <span>{alpha}</span>
            </p>
          </span>
          <input
            type='range'
            min='0'
            max='1'
            value={alpha}
            step={0.1}
            onChange={x => {
              setAlpha(x.target.value)
            }}
          />
        </section>
        <button
          onClick={() => {
            GetRandomColor()
          }}
        >
          Get a Random Color
        </button>
      </div>
    </main>
  )
}

export default ColorPicker
