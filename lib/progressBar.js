import { Bar, Presets } from 'cli-progress'
import chalk from 'chalk'

const { cyan } = chalk

/**
 * Default format for progress bars. This can be overridden
 */
const getFormat = (title = '{title}') => {
  const BAR = cyan('{bar}')
  const PERCENTAGE = `{percentage}%`
  const COMPLETED = `{value}/{total}`
  const ETA = `ETA: {eta}s`
  return `${title} ${BAR} ${PERCENTAGE} | ${COMPLETED} | ${ETA}`.trim()
}

/**
 * @param {Object} config progress bar configuration
 * @param {String} [config.title = ''] Text that will be displayed to the
 *     left of the progress bar. If omitted, no title will be shown.
 * @param {boolean} [config.show = true] If false, no progress bar will be
 *     rendered.
 * @return {Bar}
 */
export function createProgressBar(options = {}) {
  const defaults = {
    format: getFormat(),
    hideCursor: true,
    stopOnComplete: true,
    synchronousUpdate: true,
    forceRedraw: true,
  }
  return new Bar({ ...defaults, ...options }, Presets.shades_classic)
}
