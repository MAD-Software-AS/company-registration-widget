import React from 'react'

interface CompanyRegistrationHeaderProps {
  subtitle?: string
}

const CompanyRegistrationHeader: React.FC<CompanyRegistrationHeaderProps> = ({
  subtitle
}) => {
  return (
    <>
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
