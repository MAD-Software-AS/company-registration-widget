import React from 'react'

interface CompanyRegistrationHeaderProps {
  title?: string
  caption?: React.ReactNode
}

const CompanyRegistrationHeader: React.FC<CompanyRegistrationHeaderProps> = ({
  title,
  caption
}) => {
  return (
    <div className="form-head">
      <span className="text-center">{title}</span>
      {caption}
    </div>
  )
}

export default CompanyRegistrationHeader
