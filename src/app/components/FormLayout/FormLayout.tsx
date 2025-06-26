import React from 'react'

interface FormLayoutProps {
  children: React.ReactNode
  head: React.ReactNode
  actions: React.ReactNode
  t: {
    formImage: string
  }
}

const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  head,
  actions,
  t: { formImage }
}) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: '24px',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          width: '50%',
          height: '100%',
          boxSizing: 'border-box',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {head}
        <div>{children}</div>
        {actions}
      </div>
      <div style={{ width: '50%' }}>
        <img
          style={{ aspectRatio: '1 / 1', width: '100%' }}
          alt="MAD Registration Illustration"
          src={formImage}
        />
      </div>
    </div>
  )
}

export default FormLayout
