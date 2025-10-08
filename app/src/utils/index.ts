export function createPageUrl(pageName: string): string {
  switch (pageName) {
    case 'Dashboard':
      return '/dashboard';
    case 'SetIntention':
      return '/set-intention';
    case 'Community':
      return '/community';
    case 'Profile':
      return '/profile';
    default:
      return '/';
  }
}

export function saveToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function readFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return defaultValue
    return JSON.parse(raw) as T
  } catch {
    return defaultValue
  }
}

