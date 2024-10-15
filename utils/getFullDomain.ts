export function getFullDomain(headers: any) {
  // Retrieve host from the headers
  const host = headers.get('host')

  // Determine the protocol
  const protocol = headers.get('x-forwarded-proto') || 'http' // Fallback to 'http' if not behind a proxy

  // Construct full domain URL
  const fullDomain = `${protocol}://${host}`

  return fullDomain
}
