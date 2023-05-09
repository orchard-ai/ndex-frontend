import { useState, useEffect } from "react";

type PropType = {
    loading: boolean
    className?: string
}

const LoadingBar = ({loading, className} : PropType) => {
    const [progress, setProgress] = useState(0);
    const [running, setRunning] = useState(loading);

    useEffect(() => {
      if(running) {
        const updateProgress = () => setProgress(progress + 1)
        if (progress < 100) {
          setTimeout(updateProgress, 10)
        }
      }
      }, [progress]);

    return (
      <div className={`h-1 w-full block flex-none bg-neutral-200 dark:bg-neutral-600 ${className}`}>
        <div className={`bg-blue-600 h-1 rounded-full`} style={{width: `${progress}%`}}></div>
      </div>
    )
}

export default LoadingBar;