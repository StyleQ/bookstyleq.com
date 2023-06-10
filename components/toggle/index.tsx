import cx from 'classnames'

type ToggleProps = {
  checked: boolean,
  buttons?: {
    checked: {
      label: string,
      className?: string
    } 
    unchecked: {
      label: string,
      className?: string
    }
  },
  onClick?: () => void,
  className?: string,
  thumbClassName?: string,
}

export default function Toggle({
  checked = false,
  buttons,
  onClick,
  className = '',
  thumbClassName = '',
  ...props
}: ToggleProps): JSX.Element {
  const btnClassName = cx('relative rounded-3xl overflow-hidden p-1', {
    'flex w-80 gap-1': Boolean(buttons),
  },className)
  return (
    <button
      aria-checked={checked}
      role="switch"
      onClick={onClick}
      className={btnClassName}
      type="button"
      {...props}
    >
      {!buttons && (
        <>
          <span className="sr-only">Toggle</span>
          <span className="bg-white rounded-full" />
        </>
      )}
      {buttons && (
        <>
          <span style={{ height: "calc(100% - 8px)"}} className={cx("rounded-3xl w-40 absolute inset-1 transition-transform duration-150",{
            'translate-x-toggle': !checked,
            'translate-x-0': checked,
          }, thumbClassName)} />
          <span className={cx('w-40 py-1', buttons.checked.className)}>{buttons.checked.label}</span>
          <span className={cx('w-40 py-1', buttons.unchecked.className)}>{buttons.unchecked.label}</span>
        </>
      )}
    </button>
  )
}
