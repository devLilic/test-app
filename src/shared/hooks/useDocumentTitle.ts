import { useEffect } from 'react'

export function useDocumentTitle() {
  useEffect(() => {
    let isActive = true

    void window.appApi.getAppInfo().then((appInfo) => {
      if (isActive) {
        document.title = `${appInfo.appName} (${appInfo.version})`
      }
    })

    return () => {
      isActive = false
    }
  }, [])
}
