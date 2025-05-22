import React, { useState } from 'react'

import FormField from '../../../../../../../../components/FormField/FormField'
import { POS_PROVIDERS } from '../../../../../../Company.constants'

export interface PosProviderSelectProps {
  selectedItem?: string | null
  setSelectedItem: (value: string) => void
  error?: string | null
  inputError?: string | null
  setInputValue: (value: string) => void
  t?: {
    fieldLabel?: string
    fixitOnline: string
    com2gether: string
    other: string
    selectPlaceholder: string
    otherPlaceholder: string
  }
}

const PosProviderSelect: React.FC<PosProviderSelectProps> = ({
  t: {
    fixitOnline,
    com2gether,
    other,
    selectPlaceholder,
    fieldLabel,
    otherPlaceholder
  } = {
    fixitOnline: 'Fixit Online',
    com2gether: 'Com2gether',
    other: 'Other',
    selectPlaceholder: 'Select POS provider',
    otherPlaceholder: 'Enter other POS provider'
  },
  error,
  setSelectedItem,
  selectedItem,
  inputError,
  setInputValue
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const items = [
    { name: fixitOnline, value: POS_PROVIDERS.FIXIT_ONLINE },
    { name: com2gether, value: POS_PROVIDERS.COM2GETHER },
    { name: other, value: POS_PROVIDERS.OTHER }
  ]

  const onDropdownButtonClick = () => setIsDropdownVisible((prev) => !prev)

  const currentlySelected = selectedItem ? (
    items.find(({ value }) => value === selectedItem)?.name
  ) : (
    <span className="text-disabled">{selectPlaceholder}</span>
  )

  const isSelected = (objectId: string) => {
    return objectId === selectedItem
  }

  const isOtherSelected = selectedItem === POS_PROVIDERS.OTHER

  const onItemSelect = (salonId: string) => () => {
    setSelectedItem?.(salonId)
    setIsDropdownVisible(false)
  }

  return (
    <>
      <FormField className="custom-select" label={fieldLabel} error={error}>
        <div className="select-trigger" onClick={onDropdownButtonClick}>
          <div className="selected-option">{currentlySelected}</div>
          <span className={selectedItem ? 'icon' : 'icon icon-placeholder'}>
            &#9662;
          </span>
        </div>
        {isDropdownVisible ? (
          <div className="select-options">
            {items.map(({ name, value }) => (
              <div
                className={`option${isSelected(value) ? ' selected' : ''}`}
                onClick={onItemSelect(value)}
              >
                {name}
              </div>
            ))}
          </div>
        ) : null}
      </FormField>
      <FormField style={{ height: '44px' }} error={inputError}>
        {isOtherSelected && (
          <div className="other-input">
            <input
              type="text"
              className="input"
              placeholder={otherPlaceholder}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        )}
      </FormField>
    </>
  )
}

export default PosProviderSelect
