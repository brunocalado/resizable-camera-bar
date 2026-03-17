// ============================================================
// Resizable Camera Bar — constants & shared utilities
// ============================================================

export const MODULE_ID = "resizable-camera-bar";

/**
 * Returns a debounced version of `fn` that delays invocation by `delay` ms.
 * Used throughout the module to throttle resize/mutation callbacks and size saves.
 * @param {Function} fn - Function to debounce.
 * @param {number} [delay=100] - Delay in milliseconds.
 * @returns {Function}
 */
export function debounce(fn, delay = 100) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}
