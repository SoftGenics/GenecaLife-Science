import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
function Whatsapp() {
  return (
    <div>
        <FloatingWhatsApp
        phoneNumber="+919098093555"
        accountName="Geneca Life Science"
        avatar='images/dp.png'
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
      />
    </div>
  )
}

export default Whatsapp