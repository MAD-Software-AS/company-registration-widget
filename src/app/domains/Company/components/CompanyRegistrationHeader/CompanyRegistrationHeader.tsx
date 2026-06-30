import React from 'react'

interface CompanyRegistrationHeaderProps {
  title?: React.ReactNode
  caption?: React.ReactNode
}

const CompanyRegistrationHeader: React.FC<CompanyRegistrationHeaderProps> = ({
  title,
  caption
}) => {
  return (
    <div className="form-head">
      {title}
      {caption}
    </div>
  )
}

export default CompanyRegistrationHeader
