interface Props {
  progress: number
}

export function ProgressBar({progress}: Props) {
  const progressStyle = {
    width: `${progress}%`
  }
  return (
    <div
      role="progressbar"
      aria-label="Progresso de hábitos completados nesse dia"
      aria-valuenow={progress}
      className="h-3 rounded-xl bg-violet-600"
      style={progressStyle}
    />
  );
}
