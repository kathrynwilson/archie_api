/* eslint-disable no-undef */
const log = console.log // eslint-disable-line
, { _getFileName } = require(`./file.service.js`)
; // eslint-disable-line semi

describe(`file.service`, () => {
  describe(`getFileName`, () => {
    it(`should output correctly formatted name`, () => {
      // give wiggle room for time to pass during execution
      expect(
        _getFileName(`Foo Bar`) === `foo_bar_${new Date().getTime()}.csv`
        || _getFileName(`Foo Bar`) === `foo_bar_${new Date().getTime()+1}.csv`
        || _getFileName(`Foo Bar`) === `foo_bar_${new Date().getTime()+2}.csv`
        || _getFileName(`Foo Bar`) === `foo_bar_${new Date().getTime()+3}.csv`
      ).toBe(true)
    })
  })
})
