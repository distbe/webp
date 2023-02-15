import { test, expect } from 'vitest'
import { svgImageSize } from './svg'

test('svgImageSize', () => {
  expect(svgImageSize('')).toEqual({ width: 0, height: 0 })
  expect(svgImageSize('<svg width="100%" height="100%">')).toEqual({ width: 0, height: 0 })

  expect(svgImageSize('<svg width="100" height="200">')).toEqual({ width: 100, height: 200 })
  expect(svgImageSize('<svg viewBox="0 0 300 400">')).toEqual({ width: 300, height: 400 })

  expect(svgImageSize('<svg width="500" height="700" viewBox="0 0 300 400">')).toEqual({ width: 500, height: 700 })
})
