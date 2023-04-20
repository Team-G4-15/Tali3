import React from 'react'
import { CBadge, CDropdown, CDropdownHeader, CDropdownItem, CDropdownMenu } from '@coreui/react'
import { cilBell, cilEnvelopeOpen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
