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
  const renderParagraph = (text: string) => {
    const lines = text.split('\n')
    const firstNonEmptyIdx = lines.findIndex((l) => l.trim() !== '')

    return lines.map((line, idx) => {
      const trimmed = line.trim()
      const isEmpty = trimmed.length === 0
      const isBullet = line.trimStart().startsWith('•')

      // Bold section headers:
      // - first non-empty line in the paragraph (title-like)
      // - any non-bullet line that is followed by bullet lines
      const nextNonEmpty = lines.slice(idx + 1).find((l) => l.trim() !== '')
      const nextNonEmptyStartsBullet =
        nextNonEmpty?.trimStart().startsWith('•') ?? false

      const shouldBold =
        !isEmpty &&
        !isBullet &&
        (idx === firstNonEmptyIdx || nextNonEmptyStartsBullet)

      return (
        <React.Fragment key={idx}>
          {isEmpty ? null : shouldBold ? <strong>{line}</strong> : line}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      )
    })
  }

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
        <div
          className="package-details-modal__body package-details-modal__body--no-title"
        >
          <button
            type="button"
            className="package-details-modal__close"
            onClick={onClose}
            aria-label="Lukk"
          >
            ×
          </button>
          {paragraphs.map((text, idx) => (
            <p key={idx} className="package-details-modal__paragraph">
              {renderParagraph(text)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageDetailsModal
