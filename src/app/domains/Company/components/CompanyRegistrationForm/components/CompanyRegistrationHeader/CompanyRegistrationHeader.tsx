import React from 'react'

interface CompanyRegistrationHeaderProps {
  title?: string
  subtitle?: string
}

const CompanyRegistrationHeader: React.FC<CompanyRegistrationHeaderProps> = ({
  title,
  subtitle
}) => {
  return (
    <>
      <h1
        className="title-1"
        style={{ textAlign: 'center', marginBottom: '12px' }}
      >
        {title}
      </h1>

      <span
        className="subtitle"
        style={{ textAlign: 'center', marginBottom: '56px' }}
      >
        {subtitle}
      </span>
    </>
  )
}

export default CompanyRegistrationHeader
