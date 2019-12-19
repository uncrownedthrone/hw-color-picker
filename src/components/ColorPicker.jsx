import React, { useState } from 'react'

const ColorPicker = () => {
  const [hue, pickHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, pickSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, pickLightness] = useState(Math.ceil(Math.random() * 100))
  const [alpha, pickAlpha] = useState(Math.random().toFixed(1))

  const GetRandomColor = () => {
    pickHue(Math.ceil(Math.random() * 360))
    pickSaturation(Math.ceil(Math.random() * 100))
    pickLightness(Math.ceil(Math.random() * 100))
    pickAlpha(Math.random().toFixed(1))
  }

  return (
    <>
      <div className='forImage'>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
          }}
        >
          <h1>Color Picker</h1>
          <section>
            <section>
              <span class='textBox'>
                <p>
                  Hue: <span>{hue}</span>
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
                  Saturation: <span>{saturation}%</span>
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
                  Lightness: <span>{lightness}%</span>
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
                  Alpha: <span>{alpha}</span>
                </p>
              </span>
              <input
                type='range'
                min='0'
                max='1'
                value={alpha}
                step={0.1}
                onChange={x => {
                  pickAlpha(x.target.value)
                }}
              />
            </section>
            <button
              onClick={() => {
                GetRandomColor()
              }}
            >
              Click for a Random Color
            </button>
          </section>
          <footer>Made with 💜 at SDG</footer>
        </div>
      </div>
    </>
  )
}

export default ColorPicker
