import {LinkActionContext} from "../src";
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: 'url(https://github.com/ADOFAI-gg/ADOFAI-gg-Web/raw/0188761ffc76b99fbbaf5578040896a4b5c84639/public/background.png)'
      }
    ]
  },
  layout: 'centered'
};

export const decorators = [
  (Story) => (
      <LinkActionContext.Provider value={(to) => {alert(to)}}>
        <Story/>
      </LinkActionContext.Provider>
  )
]
