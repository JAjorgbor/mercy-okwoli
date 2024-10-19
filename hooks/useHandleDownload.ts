export default function useHandleDownload() {
  const handleDownload = (fileUrl: string, fileName: string) => {
    if (fileUrl) {
      // Fetch the file blob
      fetch(fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = fileName // Specify your custom filename
          document.body.appendChild(a)
          a.click()
          a.remove()
          window.URL.revokeObjectURL(url) // Clean up the URL
        })
        .catch((error) => console.error('Download failed:', error))
    }
  }
  return handleDownload
}
