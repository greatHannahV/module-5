export function isNotNullable<T>(value: T | null | undefined): value is T {
  return value !== undefined && value !== null;
}

export function getOrElse<T>(value: T, fallback: T): T {
  return isNotNullable(value) ? value : fallback;
}
