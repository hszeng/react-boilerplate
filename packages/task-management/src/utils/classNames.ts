/**
 * Utility function to combine CSS class names
 * Filters out falsy values and joins the remaining classes
 */
export function classNames(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Utility function to conditionally apply classes
 * @param condition - The condition to check
 * @param trueClass - Class to apply when condition is true
 * @param falseClass - Optional class to apply when condition is false
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass?: string
): string {
  return condition ? trueClass : falseClass || '';
}

/**
 * Utility function to create a class map
 * @param classes - Object with class names as keys and conditions as values
 */
export function classMap(
  classes: Record<string, boolean | undefined | null>
): string {
  return Object.entries(classes)
    .filter(([, condition]) => Boolean(condition))
    .map(([className]) => className)
    .join(' ');
}
