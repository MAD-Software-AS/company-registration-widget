import React, { useEffect } from 'react'

export interface PackageDetailsModalProps {
  open: boolean
  onClose: () => void
  paragraphs: string[]
}

const PackageDetailsModal: React.FC<PackageDetailsModalProps> = ({
  open,
  onClose,
  paragraphs
}) => {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) {
    return null
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="package-details-modal__backdrop"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <div
        className="package-details-modal__panel"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="package-details-modal__close"
          onClick={onClose}
          aria-label="Lukk"
        >
          ×
        </button>
        <div className="package-details-modal__body">
          {paragraphs.map((text, idx) => (
            <p key={idx} className="package-details-modal__paragraph">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageDetailsModal
